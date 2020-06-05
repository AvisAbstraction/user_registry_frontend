import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login } from "../screeens";
import { HOME, LOGIN } from "./routes";

const RouteApp = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path={LOGIN} component={Login} />
        <Route exact path={HOME} component={Home} />
      </Switch>
    </Router>
  );
};

export default RouteApp;
