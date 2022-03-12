import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardHeader, Button, Row, Col, CardBody, Table, Input, CardFooter } from 'reactstrap';
import { useAppSelector } from 'src/configs/store';

const Cart = () => {
  const carted = useAppSelector(state => state.cart.products);
  const loading = useAppSelector(state => state.cart.loading);

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="d-flex justify-content-between">
            <p>
              <FontAwesomeIcon icon="cart-shopping" /> &nbsp; Shoping Cart
            </p>
            <Button color="primary" size="sm" outline>
              Go to liked products
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <Table responsive>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3">Loading...</td>
                </tr>
              ) : carted && carted.length > 0 ? (
                carted.map(product => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} alt={product.name} width="100" height="100" />
                    </td>
                    <td>
                      <h5>{product.name}</h5>
                      <p>{product.subtitle}</p>
                    </td>
                    <td>{product.price}</td>
                    <td>
                      <Input type="number" defaultValue={product.quantity} />
                    </td>
                    <td>
                      <Button color="danger" size="sm" outline>
                        <FontAwesomeIcon icon="trash" />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No products in cart</td>
                </tr>
              )}
              <tr>
                <div style={{ textAlign: 'right' }}>
                  <Button className="mt-3" color="primary" size="sm" outline>
                    Continue Shopping
                  </Button>
                </div>
              </tr>
            </tbody>
          </Table>
          <CardFooter>
            <Row>
              <Col md="3">
                <Input type="text" placeholder="Coupon code" />
              </Col>
              <Col md="6">
                <p>User Coupon </p>
              </Col>
              <Col>
                Total price:&#36;
                {carted.reduce((acc, product) => acc + product.price * product.quantity, 0)}
                &nbsp;
                <Button color="primary" size="sm">
                  Checkout
                </Button>
              </Col>
            </Row>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
};
export default Cart;
