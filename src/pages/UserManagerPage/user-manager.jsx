import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/configs/store';
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteUser, getUserList, sortBy } from './user-manager.reducer';
import { toast } from 'react-toastify';
import UserDeleteModal from './UserDeleteModal';
import UserDetailModal from './UserDetailModal';
import UserUpdateModal from './UserUpdateModal';

const UserManager = () => {
  const dispatch = useAppDispatch();

  const [selectedUser, setSelectedUser] = React.useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [openDetailDialog, setOpenDetailDialog] = React.useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = React.useState(false);

  const loading = useAppSelector(state => state.userManager.loading);
  const userList = useAppSelector(state => state.userManager.userList);
  const updateSuccess = useAppSelector(state => state.userManager.updateSuccess);
  const errorMessage = useAppSelector(state => state.userManager.errorMessage);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  // useEffect(() => {
  //   if (updateSuccess) {
  //     toast.success('Update success');
  //   }
  //   if (updateSuccess === false) {
  //     toast.error(errorMessage);
  //   }
  // }, [loading, updateSuccess])

  const handleSyncList = () => {
    dispatch(getUserList());
  };

  const sort = key => {
    dispatch(sortBy(key));
  };

  const closeDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const onDeleteUser = user => {
    setSelectedUser(user);
    setOpenDeleteDialog(true);
  };

  const closeDetailDialog = () => {
    setOpenDetailDialog(false);
  };

  const onDetailUser = user => {
    setSelectedUser(user);
    setOpenDetailDialog(true);
  };

  const closeUpdateDialog = () => {
    setOpenUpdateDialog(false);
  };

  const onUpdateUser = user => {
    setSelectedUser(user);
    setOpenUpdateDialog(true);
  };

  const onCreateNewUser = () => {
    setOpenUpdateDialog(true);
    setSelectedUser({});
  };

  return (
    <div>
      <h2 id="exam-heading">
        <p>User Managerment</p>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Button
            className="btn btn-primary jh-create-entity"
            id="jh-create-entity"
            onClick={() => onCreateNewUser()}
          >
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new user
          </Button>
        </div>
      </h2>
      <div className="table-responsive">
        {userList && userList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={() => sort('ID')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={() => sort('Username')}>
                  Username <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={() => sort('Fullname')}>
                  Fullname <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={() => sort('Career')}>
                  Career <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={() => sort('Email')}>
                  Email <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={() => sort('ImageUrl')}>
                  ImageUrl <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {userList.map((user, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button color="link" size="sm">
                      {user.ID}
                    </Button>
                  </td>
                  <td>{user.Username}</td>
                  <td>{user.Fullname}</td>
                  <td>{user.Career}</td>
                  <td>{user.Email}</td>
                  <td>{user.ImageUrl}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button color="info" size="sm" onClick={() => onDetailUser(user)}>
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button color="primary" size="sm" onClick={() => onUpdateUser(user)}>
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button color="danger" size="sm" onClick={() => onDeleteUser(user)}>
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No user found</div>
        )}
      </div>
      <UserDeleteModal
        isOpen={openDeleteDialog}
        handleClose={closeDeleteDialog}
        userData={selectedUser}
      />
      <UserDetailModal
        isOpen={openDetailDialog}
        handleClose={closeDetailDialog}
        userData={selectedUser}
      />
      <UserUpdateModal
        isOpen={openUpdateDialog}
        handleClose={closeUpdateDialog}
        userData={selectedUser}
      />
    </div>
  );
};
export default UserManager;
