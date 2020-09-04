import React from "react";
import "./header.css";
import logo from "../../image/logo.PNG";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div className="col-6">
        <img src={logo} alt="be" className="img-responsive logo_image" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="col-6 header_list">
          <a>WORK</a>
          <a>ABOUT </a>
          <a> BLOG </a>
          <a> CONTACT</a>
          <div className="hire_btn">HIRE</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
