import "./loader.scss";
import React from "react";

const Loader = () => {
  return (
    <div id="loader" className="d-none">
      <div className="spinner-border" role="status"></div>
    </div>
  )
}

export default Loader;