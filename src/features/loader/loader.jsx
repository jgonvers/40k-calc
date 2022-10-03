import "./loader.scss";
import React from "react";
import { selectLoaderState } from "./loaderSlice";
import { useSelector, connect } from "react-redux";

const Loader = (props) => {
  if (useSelector(selectLoaderState)) {
    return (
      <div id="loader">
        <div className="spinner-border" role="status"></div>
      </div>
    )
  } else { return "" }
}

function mapStateToProps(state) { return state; }

export default connect(mapStateToProps)(Loader);

