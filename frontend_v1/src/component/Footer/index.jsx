import React from 'react'

function Footer() {
  return (
    <div id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="logo text-decoration-underline my-3">4U</div>

          <p>GPKD số: 58A8011955</p>
          <p>Ngày cấp: 12/12/2022</p>
          <p>Cấp bởi: Hà Nội</p>
          <p>Đ/c: Thái Bình</p>
          <p>Sđt : 099999999</p>
          <p>Email: teedangtu@gmail.com</p>
    
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <h5 className="text-dark mb-3 title-footer mt-5">SERVICE</h5>
          <a href="#">
            <p>Contact</p>
          </a>
          <a href="#">
            <p>Delivery and returns</p>
          </a>
          <a href="#">
            <p>FQA</p>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <h5 className="text-dark mb-3 title-footer mt-5">STORE</h5>
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