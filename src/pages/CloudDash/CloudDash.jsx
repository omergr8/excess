import React from "react";
import Topbar from "./sections/Topbar/Topbar";
import Header from "../Common/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import Footer from "../Common/Footer/Footer";
import classes from "./CloudDash.module.css";
const CloudDash = () => {
  return (
    <div>
      <Header incoming="CloudDash" />
      <div className={classes.root}>
        <Topbar />
      </div>

      <Footer incoming="CloudDash" />
    </div>
  );
};

export default CloudDash;
