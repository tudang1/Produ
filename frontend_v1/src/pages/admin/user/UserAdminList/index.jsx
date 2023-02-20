import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useCreateUserMutation, useDeleteUserMutation, useGetUsersQuery, useUpdateUserMutation } from '../../../../app/services/userService';

function UserAdminList() {
  const {users} = useSelector((state) => state.users);

  const {isLoading} = useGetUsersQuery();
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleEditUser = (id) =>{

  }
  
  const handleDeleteUser = (id) =>{

  }
  if (isLoading) {
    return <h3>Loading ...</h3>;
  }
  
  return (
    <div className="course-list mt-4 mb-4">
    <div className="container">
    <div className="mb-4">
                    <Link
                        to={"/admin/users/create"}
                        className="btn-custom btn-create-course"
                    >
                        <span>
                            <i className="fa-solid fa-plus"></i>
                        </span>
                        Create Account User
                    </Link>
                </div>

        <div className="course-list-inner p-2">
            <table className="table course-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>Address</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.roles}</td>
                            <td>
                                <button
                                    className="btn btn-info"
                                    onClick={() =>
                                        handleEditUser(user.id)
                                    }
                                >
                                    Edit
                                </button>
                                <button className="btn btn-danger"
                                        onClick={() =>
                                            handleDeleteUser(user.id)
                                        }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default UserAdminList