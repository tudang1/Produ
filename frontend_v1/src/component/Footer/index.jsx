import React from 'react'

function Footer() {
  return (
    <div id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="logo text-decoration-underline my-3">4U</div>
          <a href="#">
            <p>GPKD số: 58A8011955</p>
          </a>
          <a href="#">
            <p>Ngày cấp: 12/12/2022</p>
          </a>
          <a href="#">
            <p>Cấp bởi: Hà Nội</p>
          </a>
          <a href="#">
            <p>Đ/c: Thái Bình</p>
          </a>
          <a href="#">
            <p>Sđt : 099999999</p>
          </a>
          <a href="#">
            <p>Email: teedangtu@gmail.com</p>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <h5 className="text-dark mb-3 title-footer mt-5">HÕ TRỢ KHÁCH HÀNG</h5>
          <a href="#">
            <p>Chính sách bảo mật</p>
          </a>
          <a href="#">
            <p>Chính sách vận chuyển</p>
          </a>
          <a href="#">
            <p>Chính sách đổi trả</p>
          </a>
          <a href="#">
            <p>Hình thức thanh toán</p>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <h5 className="text-dark mb-3 title-footer mt-5">Chi Nhánh</h5>
          <a href="#">
            <p>Cầu Giấy - Hà Nội</p>
          </a>
          <a href="#">
            <p>Đông Hưng - Thái Bình</p>
          </a>
          <a href="#">
            <p>Nagoya - Japan</p>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 pb-4">
          <h5 className="title-footer text-dark mb-3 mt-5">KẾT NỐI VỚI CHÚNG TÔI</h5>
          <div className="icon-footer d-flex">
            <a href="#"><span className="social-icon fs-3 mx-2"><i className="fa-brands fa-facebook"></i></span></a>
            <a href="#"><span className="social-icon fs-3 mx-2"><i className="fa-brands fa-instagram"></i></span></a>
            <a href="#"><span className="social-icon fs-3 mx-2"><i className="fa-brands fa-twitter"></i></span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer