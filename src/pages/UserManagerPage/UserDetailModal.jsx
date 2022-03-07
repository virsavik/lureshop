import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const UserDetailModal = ({ userData, isOpen, handleClose }) => {
  return (
    <Modal isOpen={isOpen} toggle={handleClose}>
      <ModalHeader toggle={handleClose}>User Detail</ModalHeader>
      <ModalBody id="user.detail">
        {userData ? (
          <dl className="jh-entity-details">
            <dt>
              <span id="id">ID</span>
            </dt>
            <dd>{userData.ID}</dd>
            <dt>
              <span id="username">Username</span>
            </dt>
            <dd>{userData.Username}</dd>
            <dt>
              <span id="fullname">Fullname</span>
            </dt>
            <dd>{userData.Fullname}</dd>
            <dt>
              <span id="career">Career</span>
            </dt>
            <dd>{userData.Career}</dd>
            <dt>
              <span id="email">Email</span>
            </dt>
            <dd>{userData.Email}</dd>
            <dt>
              <span id="imageUrl">ImageUrl</span>
            </dt>
            <dd>{userData.ImageUrl}</dd>
          </dl>
        ) : (
          <div>Loading...</div>
        )}
      </ModalBody>
    </Modal>
  );
};
export default UserDetailModal;
