import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
  Spinner,
} from 'reactstrap';
import { useAppDispatch, useAppSelector } from '../../configs/store';
import { addProductToFavorite } from '../FavoritePage/favorite.reducer';
import { getAllProducts } from './product.reducer';

const Product = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(state => state.product.loading);
  const errorMessage = useAppSelector(state => state.product.errorMessage);
  const products = useAppSelector(state => state.product.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const likeProduct = product => {
    toast.success(`You liked ${product.name}`);
    dispatch(addProductToFavorite(product));
  };

  const addToCart = product => {
    // eslint-disable-next-line no-undef
    alert(`You added ${product.name} to cart`);
  };

  return (
    <div>
      <Row xs="1" sm="2" md="3" lg="4">
        {loading ? (
          <Spinner color="primary" />
        ) : products && products.length > 0 ? (
          products.map((product, index) => (
            <Col key={index}>
              <Card style={{ margin: '5px' }}>
                <div style={{ textAlign: 'right', padding: '10px' }}>
                  <Button
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                    onClick={() => likeProduct(product)}
                  >
                    <FontAwesomeIcon icon="heart" color="red" />
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
          <h3>No products found</h3>
        )}
      </Row>
    </div>
  );
};
export default Product;
