import React from "react";
import Header from "./sections/Header/Header";
import classes from "./FreeSubDash.module.css";
import Footer from "../Common/Footer/Footer";
const FreeSubDash = () => {
  return (
    <div>
      <div className={classes.headerContainer}>
        <Header />
      </div>
      <Footer incoming="FreeSubDash" />
    </div>
  );
};

export default FreeSubDash;
