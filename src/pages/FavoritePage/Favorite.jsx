import React from 'react';
import { useAppDispatch, useAppSelector } from '../../configs/store';
import {
  Row,
  Col,
  Spinner,
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeProductFromFavorite } from '../../shared/reducers/favorite.reducer';
import { addToCart as addCart } from 'src/shared/reducers/cart.reducer';
import { toast } from 'react-toastify';

const Favorite = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorite.products);
  const loading = false;

  const addToCart = product => {
    dispatch(addCart(product)).then(() => {
      toast.success(`${product.name} added to cart!`);
    });
  };

  const dislikeProduct = product => {
    dispatch(removeProductFromFavorite(product.id));
    toast.success('Dislike product ' + product.name);
  };

  return (
    <div>
      <Row xs="1" sm="2" md="3" lg="4">
        {loading ? (
          <Spinner color="primary" />
        ) : favorites && favorites.length > 0 ? (
          favorites.map((product, index) => (
            <Col key={index}>
              <Card style={{ margin: '5px' }}>
                <div style={{ textAlign: 'right', padding: '10px' }}>
                  <Button
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                    onClick={() => dislikeProduct(product)}
                  >
                    <FontAwesomeIcon icon="heart" color="blue" />
                  </Button>
                </div>
                <CardImg top width="100%" src={product.image} alt={product.name} />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {product.subtitle}
                  </CardSubtitle>
                  <CardText>{product.description}</CardText>
                  <Row xs="2">
                    <Col>
                      <h5 style={{ color: 'green' }}>&#36;{product.price}</h5>
                    </Col>
                    <Col>
                      <Button block color="danger" onClick={() => addToCart(product)}>
                        <FontAwesomeIcon icon="shopping-cart" />
                        &nbsp;Add to cart
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <h3>No favorites found</h3>
        )}
      </Row>
    </div>
  );
};
export default Favorite;
