import React from "react";
import {default as BootstrapSpinner} from "react-bootstrap/Spinner";

const Spinner = () => {
  return <div className="text-center">
    <BootstrapSpinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </BootstrapSpinner>
  </div>
}

export default Spinner;
