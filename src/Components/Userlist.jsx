import React, { useState } from "react";
import { User } from "../Assets/User";
import { Link } from "react-router-dom";


export default function Userlist() {
  const [users, setUsers] = useState(User);

  const handleDelete = (userId) => {
    const deleteUsers = users.filter((user) => user.id !== userId);
    setUsers(deleteUsers);
  };

  return (
   

    <div className="container">
      <div className="row">
        <div className="col-md-12 position-absolute user w-100">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "60vh" }}
          >
            <div className="container user">
              <div className="row">
                <div className="col-md-1"></div>

                <div className="col-md-10">
                  <div className="borderr shadow border-bottom border-2 ">
                    <div className="container d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <span className="display-6 fs-4 fw-bold">User</span>
                      </div>

                      <div>
                        <Link to="/add" className="btn btn-primary">
                          ADD
                        </Link>
                      </div>
                    </div>
                    <div className="table-responsive ">
                      {users.length === 0 ? (
                        <div className="text-center p-3">No users found</div>
                      ) : (
                        <table className="table table-bordered table-horizontal-lines shadow table-hover  table-striped">
                          <thead>
                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">FirstName</th>
                              <th scope="col">LastName</th>
                              <th scope="col">Email</th>
                              <th scope="col">Contact No</th>
                              <th scope="col">Status</th>
                              <th scope="col">Image</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.map((user, index) => (
                              <tr key={index}>
                                <th scope="row">{user.id}</th>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.contactNo}</td>
                                <td>{user.status}</td>
                                <td>
                                  <img src={user.imageSrc} alt="User" />
                                </td>
                                <td className="d-flex">
                                  <Link
                                    to={`/edit/${user.id}`}
                                    className="btn btn-sm btn-primary mx-1 "
                                  >
                                    <i className="bi bi-pencil-square"></i>
                                  </Link>
                                  <button
                                    className="btn btn-sm btn-danger mx-1"
                                    onClick={() => handleDelete(user.id)}
                                  >
                                    <i className="bi bi-trash-fill"></i>
                                  </button>
                                  <Link
                                    to={`/info/${user.id}`}
                                    className="btn btn-sm btn-warning mx-1"
                                  >
                                    <i className="bi bi-eye-fill"></i>
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
