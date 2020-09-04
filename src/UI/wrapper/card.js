import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="container ">
      {/* card start */}
      <div className="wrapper">
        <div className="card">
          <div className="cardParent"></div>
          <div className="childCard">
            <p className="CATEGORY">CATEGORY</p>
            <p className="PROJECT_TITLE">
              <span>PROJECT TITLE</span>
              <span>2018</span>
            </p>
          </div>
        </div>
        {/* second card */}
        <div className="card">
          <div className="cardParent"></div>
          <div className="childCard">
            <p className="CATEGORY">CATEGORY</p>
            <p className="PROJECT_TITLE">
              <span>PROJECT TITLE</span>
              <span>2018</span>
            </p>
          </div>
        </div>
        {/* third case */}
        <div className="card">
          <div className="cardParent"></div>
          <div className="childCard">
            <p className="CATEGORY">CATEGORY</p>
            <p className="PROJECT_TITLE">
              <span>PROJECT TITLE</span>
              <span>2018</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
