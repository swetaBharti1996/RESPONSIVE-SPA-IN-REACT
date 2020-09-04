import React from "react";
import PageWrapper from "../UI/wrapper/pageWrapper";
import Header from "../components/header";
import Footer from "../components/footer";
import _ from "lodash";
import be2 from "../image/be2.jpg";
import facebook from "../image/facebook.png";
import instagram1 from "../image/instagram1.jpg";
import internet1 from "../image/internet1.png";
import linkedin from "../image/linkedin.png";
import twitter1 from "../image/twitter1.png";
import man1 from "../image/man1.PNG";
import Text from "./text";
import Card from "../UI/wrapper/card";
import "./store.css";
import Home from "./home";
import Strap from "../UI/wrapper/strap";
import BlackCard from "../UI/wrapper/blackCard";

const Store = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="margin_devide">
          <div className="row heading">
            <div className="col-6">
              <div className="">
                <span className="hello">Hello, I'm</span>
                <h4 className="lewis">Lewis Nathaniel</h4>
                <h6 className="UI">UI & UX</h6>
                <div className="col-sm-5 col-md-5 col-lg-5 socialIcons ">
                  <img
                    src={facebook}
                    alt="be"
                    className="img-responsive socialLogo1"
                  />
                  <img
                    src={instagram1}
                    alt="be"
                    className="img-responsive socialLogo"
                  />
                  <img
                    src={twitter1}
                    alt="be"
                    className="img-responsive socialLogo"
                  />
                  <img
                    src={facebook}
                    alt="be"
                    className="img-responsive socialLogo"
                  />
                  <img
                    src={internet1}
                    alt="be"
                    className="img-responsive socialLogo"
                  />
                  <img
                    src={linkedin}
                    alt="be"
                    className="img-responsive socialLogo"
                  />
                </div>
                <div className="btngrp">
                  <button className="groupBtn">HIRE ME</button>
                  <div className="groupBtn1"> SEE MY RESUME </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src={man1} alt="be" className="img-responsive manImage" />
            </div>
          </div>
        </div>
        <Text />
        <div className="loadMore">LOAD MORE</div>
        <Home />
        <br />
        <Card />
        <Card />
        <Card />

        <Strap />
        <BlackCard />
        <Footer />
      </div>
    </div>
  );
};

export default Store;
