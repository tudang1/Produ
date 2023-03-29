import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import registerApi from "../../../app/api/register";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  name: yup.string().required("Xin nhập tên."),
  email: yup.string().required().email("Đây k phải Mail."),
  phoneNumber: yup.number().required().positive().integer(),
  address: yup.string().required("Xin nhập địa chỉ."),
  password:yup.string().required("Xin nhập Password.")
});

function RegisterByAny() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = async(data) => {
    try {
      // Gọi API tạo phía server
      await registerApi.createAcc(data);

      //sau khi tạo User thành cong
      alert("Tạo User Thành Công");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="container mt-5 mb-5">
        <h2 className="text-center  mb-3">Regsiter</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="bg-light p-4">
              <div className="mb-3">
                <label className="col-form-label">Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  {...register("name")}
                />
                {errors.name && <p className="arm">{errors.name.message}</p>}
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email</label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  {...register("email")}
                />
                {errors.email && <p className="arm">{errors.email.message}</p>}
              </div>
              <div className="mb-3">
                <label className="col-form-label">PhoneNumber</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  {...register("phoneNumber",{required: true,
                    minLength: 6,
                    maxLength: 12,})}
                />
                {errors.phoneNumber && (
                  <p className="arm">Số điện thoại chưa đúng...</p>
                )}
              </div>
              <div className="mb-3">
                <label className="col-form-label">Address</label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  {...register("address")}
                />
                  {errors.address && <p className="arm">{errors.address.message}</p>}
              </div>
              <div className="mb-3">
                <label className="col-form-label">Password</label>
                <input
                  type="text"
                  id="password"
                  className="form-control"
                  {...register("password")}
                />
                {errors.password && <p className="arm">{errors.password.message}</p>}
              </div>
            </div>

            <div className="text-center">
              <input className="btn btn-success mx-2" id="btn-save" type="submit" />
            </div>
          </div>
        </div>
      </form>
      <ToastContainer position="top-center" />
    </>
  );
}

export default RegisterByAny;
