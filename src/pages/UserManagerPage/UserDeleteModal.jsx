import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch } from 'src/configs/store';
import { toast } from 'react-toastify';
import { deleteUser } from './user-manager.reducer';

const UserDeleteModal = ({ isOpen, handleClose, userData }) => {
  const dispatch = useAppDispatch();

  const confirmDelete = () => {
    dispatch(deleteUser(userData.ID));
    toast.success('Delete user success');
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} toggle={handleClose}>
      <ModalHeader toggle={handleClose}>Confirm delete operation</ModalHeader>
      <ModalBody id="delete.question">
        Are you sure you want to delete User {userData && userData.ID}?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp; Cancel
        </Button>
        <Button
          id="jhi-confirm-delete-exam"
          data-cy="entityConfirmDeleteButton"
          color="danger"
          onClick={confirmDelete}
        >
          <FontAwesomeIcon icon="trash" />
          &nbsp; Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default UserDeleteModal;
