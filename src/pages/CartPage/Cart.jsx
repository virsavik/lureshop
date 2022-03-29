import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Card, CardHeader, Button, Row, Col, CardBody, Table, Input, CardFooter } from 'reactstrap';
import { useAppDispatch, useAppSelector } from 'src/configs/store';
import { removeFromCart, updateQuantity } from 'src/shared/reducers/cart.reducer';

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartStore = useAppSelector(state => state.cart.products);
  const [carted, setCarted] = useState(cartStore);
  const loading = useAppSelector(state => state.cart.loading);

  const removeProduct = product => {
    setCarted(carted.filter(item => item.id !== product.id));
    dispatch(removeFromCart(product.id)).then(() => {
      toast.success(`${product.name} removed from cart`);
    });
  };

  const onChangeQuantity = (product, e) => {
    const quantity = +e.target.value;
    if (quantity > 1) {
      setCarted(carted.map(p => (p.id === product.id ? { ...product, quantity } : p)));
    }
  };

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
                    <td>&#36;{product.price.toFixed(2)}</td>
                    <td>
                      <Input
                        type="number"
                        min="1"
                        style={{ maxWidth: '100px' }}
                        defaultValue={product.quantity}
                        onChange={e => onChangeQuantity(product, e)}
                      />
                    </td>
                    <td>
                      <Button
                        color="danger"
                        size="sm"
                        outline
                        onClick={() => removeProduct(product)}
                      >
                        <FontAwesomeIcon icon="trash" />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr key="no-product">
                  <td colSpan="3">No products in cart</td>
                </tr>
              )}
              <tr key="continue-shopping">
                <td style={{ textAlign: 'right' }}>
                  <Button className="mt-3" color="primary" size="sm" outline>
                    Continue Shopping
                  </Button>
                </td>
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
