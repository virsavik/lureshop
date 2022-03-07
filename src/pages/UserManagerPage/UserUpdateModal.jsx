import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
} from 'reactstrap';
import { useAppDispatch } from 'src/configs/store';
import { addUser, updateUser } from './user-manager.reducer';

const defaultUser = {
  ID: '',
  Username: '',
  Fullname: '',
  Career: '',
  Email: '',
  ImageUrl: '',
};

const UserUpdateModal = ({ userData, isOpen, handleClose }) => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState(userData || defaultUser);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  const onChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onUpdateUser = () => {
    dispatch(updateUser(user));
    toast.success('Update user success');
  };

  const onCreateUser = () => {
    dispatch(addUser(user));
    toast.success('Create user success');
  };

  const onSubmit = e => {
    e.preventDefault();
    if (user && user.ID) {
      onUpdateUser();
    } else {
      onCreateUser();
    }
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} toggle={handleClose}>
      <ModalHeader toggle={handleClose}>{userData ? 'Update User' : 'Create User'}</ModalHeader>
      <ModalBody id="user.detail">
        <Row className="justify-content-center">
          <Col md="8">
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="ID">ID</Label>
                <Input type="text" name="ID" defaultValue={user.ID} disabled />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="Username"
                  id="username"
                  placeholder="Username"
                  onChange={onChange}
                  defaultValue={user.Username}
                />
              </FormGroup>
              <FormGroup>
                <Label for="fullname">Fullname</Label>
                <Input
                  type="text"
                  name="Fullname"
                  id="fullname"
                  placeholder="Fullname"
                  onChange={onChange}
                  defaultValue={user.Fullname}
                />
              </FormGroup>
              <FormGroup>
                <Label for="career">Career</Label>
                <Input
                  type="text"
                  name="Career"
                  id="career"
                  placeholder="Career"
                  onChange={onChange}
                  defaultValue={user.Career}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="text"
                  name="Email"
                  id="email"
                  placeholder="Email"
                  onChange={onChange}
                  defaultValue={user.Email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageUrl">ImageUrl</Label>
                <Input
                  type="text"
                  name="ImageUrl"
                  id="imageUrl"
                  placeholder="ImageUrl"
                  onChange={onChange}
                  defaultValue={user.ImageUrl}
                />
              </FormGroup>
              <Button color="primary" type="submit">
                <FontAwesomeIcon icon="save" />
                &nbsp;Save
              </Button>
            </Form>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};
export default UserUpdateModal;
