import React from "react";
import "./home.css";
import _ from "lodash";
import mobileman from "../image/mobileman.PNG";

const Home = () => {
  return (
    <div className="container">
      <div className="row home-main-div">
        <div className=" col-4 mobile">
          <img src={mobileman} alt="be" className="img-responsive" />
        </div>
        <div className="col-8">
          <h3 className="about">ABOUT ME</h3>
          <h1 className="WHO">WHO AM I</h1>
          <h6 className="Lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pellentesque eu enim eget luctus. Sed augue felis, facilisis et
            elementum vitae, aliquam sit amet ante. Sed iaculis eros sem,
            elementum consequat est consequat eu. Quisque aliquet a ipsum nec
            tincidunt. Nulla vitae rhoncus leo. Praesent dui sapien, bibendum
            quis tempus dictum, auctor ac dui. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Donec at
            mauris porta, ullamcorper sem quis, lobortis sem. Donec sit amet
            aliquet dui, at varius est. Phasellus porttitor finibus neque vel
            vehicula. Duis in nulla egestas, dignissim elit at, imperdiet eros.
            Integer tristique posuere purus. Suspendisse placerat, quam vitae
            ullamcorper sollicitudin, dui ligula molestie massa, sit amet
            laoreet nibh ex vitae dui. Aenean laoreet pellentesque lacus, eget
            varius massa mattis quis. Nunc ultrices urna eu nunc lobortis
            pulvinar. Duis viverra, quam non imperdiet scelerisque, urna nunc
            consequat velit, in mollis erat nibh in libero.
          </h6>
          <div className="btngrp1">
            <div className="btn1">HIRE ME</div>
            <div className="btn2">SEE MY RESUME</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
