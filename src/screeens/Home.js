import React from "react";
import { withLayout } from "../routes/Layout";

export let Home = (props) => {
  return <div>Welcome to Home</div>;
};

Home = withLayout(Home);
