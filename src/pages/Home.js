import React from "react";
import withWidget from "../widget-framework/hoc/withWidget";

function Home() {
  return <div className="home-container">
    <div>
      <h1>This is the homepage</h1></div>
  </div>;
}

export default withWidget(Home);
