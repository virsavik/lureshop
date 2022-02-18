import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Form,
  Row,
} from 'reactstrap';
import ValidatedInput from 'src/shared/components/ValidatedInput';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigate = useNavigate();

  // eslint-disable-next-line no-undef
  const onSubmit = values => alert(JSON.stringify(values));

  return (
    <div
      style={{
        top: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        padding: 6,
      }}
    >
      <Container className="m-4">
        <Row xs="2" className="mb-3">
          <Col>
            <h4>Sign in</h4>
          </Col>
          <Col>
            <Button block color="primary" outline onClick={() => navigate('/register')}>
              Register
            </Button>
          </Col>
        </Row>
        <Button block outline className="mb-3" color="primary">
          <FontAwesomeIcon icon={['fab', 'google']} />
          &nbsp;Login with Google
        </Button>
        <hr style={{ width: '100%' }} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ValidatedInput
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'Required',
              pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' },
            })}
            invalid={!!errors.email}
            error={errors.email && errors.email.message}
          />
          <ValidatedInput
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Required' })}
            invalid={!!errors.password}
            error={errors.password && errors.password.message}
          />
          <Row xs="2">
            <Col>
              <Button block color="primary" type="submit">
                Login
              </Button>
            </Col>
            <Col>
              <Link style={{ textDecoration: 'none' }} to="/forgot-password">
                Forgot password?
              </Link>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
export default LoginPage;
