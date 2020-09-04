import React from "react";
import "./strap.css";
import _ from "lodash";
import strapImage from "../../image/strapImage.PNG";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Strap = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="strapImg">
            <img src={strapImage} alt="be" class="img-responsive" />
          </div>
          <div className="strapText">
            <h4 className="Edward">Edward M. Brooks</h4>
            <h6 className="Marketing">Marketing House</h6>

            <FontAwesomeIcon
              icon={faStar}
              style={{
                fontSize: "30px",
                color: "black",
              }}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{
                fontSize: "30px",
                color: "black",
              }}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{
                fontSize: "30px",
                color: "black",
              }}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{
                fontSize: "30px",
                color: "black",
              }}
            />
            <FontAwesomeIcon
              icon={faStarHalf}
              style={{
                fontSize: "30px",
                color: "black",
              }}
            />
            <h2 className="READ">READ ME</h2>
            <p className="Sometimes">Sometimes i write something smart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strap;
