import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Store from "../pages/store";
import Text from "../pages/text";
import Card from "../UI/wrapper/card";
import Strap from "../UI/wrapper/strap";
import BlackCard from "../UI/wrapper/blackCard";
import Footer from "../components/footer";
import Header from "../components/header";

const RouteHandle = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={Home} />
      <Route exact strict path="/store" component={Store} />
      <Route exact strict path="/text" component={Text} />
      <Route exact strict path="/card" component={Card} />
      <Route exact strict path="/home" component={Home} />
      <Route exact strict path="/strap" component={Strap} />
      <Route exact strict path="/black-card" component={BlackCard} />
      <Route exact strict path="/footer" component={Footer} />
      <Route exact strict path="/header" component={Header} />
    </Switch>
  );
};

export default RouteHandle;
