import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import registerApi from '../../../app/api/register';
import baseApi from '../../../app/services/baseService';

function RegisterByAny() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userPassword, setUserPassword] = useState("");
 
    const handleAddUserByAny = async(userName,userAddress,userEmail,userPhone,userPassword) =>{
        try {
            if (!userName) {
              alert("Tiêu đề không được để trống");
              return;
            }
            //tao user moi
            let newUser = {
              name: userName,
              email: userEmail,
              phone: userPhone,
              address : userAddress,
              password: userPassword,
            };
            // Gọi API tạo phía server
            await registerApi.createAcc(newUser);
            
            //sau khi tạo User thành cong
            alert("Tạo User Thành Công");
            setTimeout(() => {
              navigate("/");
            }, 1500);
          } catch (e) {
            alert(e.response.data.message);
          }
    }

  return (
    <>
    <div className="container mt-5 mb-5">
      <h2 className="text-center  mb-3">Regsiter</h2>

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
            
          </div>

          <div className="text-center mt-3">
            <button className="btn btn-secondary btn-back" >
              <a href="javascript:history.back()">
                Quay lại
              </a>
            </button>
            <button
              className="btn btn-success"
              id="btn-save"
              onClick={()=>handleAddUserByAny(userName,userAddress,userEmail,userPhone,userPassword)}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer position="top-center" />
  </>
  )
}

export default RegisterByAny