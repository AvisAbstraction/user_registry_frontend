import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, UserDetails } from "../screeens";
import { HOME, USERDETAILS } from "./routes";

const RouteApp = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={USERDETAILS} component={UserDetails} />
      </Switch>
    </Router>
  );
};

export default RouteApp;
