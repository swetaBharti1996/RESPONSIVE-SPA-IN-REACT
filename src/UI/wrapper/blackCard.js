import React from "react";
import "./blackCard.css";

const BlackCard = () => {
  return (
    <div className="container ">
      <div className="wrapper">
        <div className="card">
          <div className="cardParent"></div>
          <div className="childCard1">
            <div className="childCardtextt">
              <h4 className="TEN">TEN THE BEST APP IN 2017</h4>
              <h5 className="CATEGORY1">CATEGORY</h5>
              <p className="Loremm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas pellentesque eu enim eget luctus. Sed augue felis,
                facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis
                eros sem, elementum consequat.
              </p>
              <div className="READ_MOREBTN">READ MORE</div>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="card">
          <div className="cardParent"></div>
          <div className="childCard1">
            <div className="childCardtextt">
              <h4 className="TEN">TEN THE BEST APP IN 2017</h4>
              <h5 className="CATEGORY1">CATEGORY</h5>
              <p className="Loremm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas pellentesque eu enim eget luctus. Sed augue felis,
                facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis
                eros sem, elementum consequat.
              </p>
              <div className="READ_MORE">READ MORE</div>
            </div>
          </div>
        </div>
        {/* third case */}
        <div className="card">
          <div className="cardParent"></div>
          <div className="childCard1">
            <div className="childCardtextt">
              <h4 className="TEN">TEN THE BEST APP IN 2017</h4>
              <h5 className="CATEGORY1">CATEGORY</h5>
              <p className="Loremm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas pellentesque eu enim eget luctus. Sed augue felis,
                facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis
                eros sem, elementum consequat.
              </p>
              <div className="READ_MOREBTN">READ MORE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackCard;
