import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useCreateUserMutation } from "../../../../app/services/userService";
function UserAdminCreate() {
  const navigate=useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [roles,setRoles]=useState([]);
  const [createUser] = useCreateUserMutation();

  let options = [
    { value: "ADMIN", label: "ADMIN" },
    { value: "USER", label: "USER" },
  ];

  const handleChangeRoles = (e) => {
    let arr = [];
    arr.push(e.value);
    setRoles(arr);
  };

  const handleAddUser = async () => {
    if (!userName || !userEmail || !userPassword) {
      alert("Bạn cần điền hết mọi thông tin");
      return;
    }
    let newUser = {
      name: userName,
      email: userEmail,
      phone: userPhone,
      address: userAddress,
      password: userPassword, 
      roles:roles,
    };
    createUser(newUser)
    .unwrap()
    .then(() => {
      alert("Tạo thành công")

      setTimeout(() => {
          navigate("/admin/users");
      }, 1500);
    })
    .catch((err) => alert(err.data.message));

  };
  return (
    <>
      <div className="container mt-5 mb-5">
        <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="bg-light p-4">
              <div className="mb-3">
                <label className="col-form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email</label>
                <input
                  type="text"
                  id="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">PhoneNumber</label>
                <input
                  type="text"
                  id="phone"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Address</label>
                <input
                  type="text"
                  id="address"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Password</label>
                <input
                  type="text"
                  id="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="course-topic" className="form-label fw-bold">
                  Roles
                </label>
                <Select
                  closeMenuOnSelect={false}
                  onChange={handleChangeRoles}
                
                  options={options}
                />
              </div>
            </div>

            <div className="text-center mt-3">
              <button className="btn btn-secondary btn-back">
                <Link className="navbar-brand" to={"/users"}>
                  Quay lại
                </Link>
              </button>
              <button
                className="btn btn-success"
                id="btn-save"
                onClick={handleAddUser}
              >
                Tạo User
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}

export default UserAdminCreate;