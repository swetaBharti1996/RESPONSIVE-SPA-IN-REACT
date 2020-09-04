import React from "react";
import "./footer.css";
import _ from "lodash";
import facebook from "../../image/facebook.png";
import instagram1 from "../../image/instagram1.jpg";
import internet1 from "../../image/internet1.png";
import linkedin from "../../image/linkedin.png";
import twitter1 from "../../image/twitter1.png";

const Footer = () => {
  return (
    <div className="row footer">
      <div className="col-6 left">
        <h6>© 2018 UI43 - Free Templates</h6>
        <img src={facebook} alt="be" className="img-responsive socialFooter" />
        <img
          src={instagram1}
          alt="be"
          className="img-responsive socialFooter"
        />
        <img src={twitter1} alt="be" className="img-responsive socialFooter" />
        <img src={facebook} alt="be" className="img-responsive socialFooter" />
        <img src={internet1} alt="be" className="img-responsive socialFooter" />
        <img src={linkedin} alt="be" className="img-responsive socialFooter" />
      </div>
      <div className="col-6 right">
        <h6>Work</h6>
        <h6>About Me </h6>
        <h6> Blog </h6>
        <h6>Contact</h6>
        <div className="footerbutton">HIRE ME</div>
      </div>
    </div>
  );
};

export default Footer;
