import React from "react";
import Topbar from "./sections/Topbar/Topbar";
import Header from "../Common/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import Footer from "../Common/Footer/Footer";
import classes from "./CloudDash.module.css";
const CloudDash = () => {
  return (
    <div>
      <div className={classes.root}>
        <Header incoming="CloudDash" />
        <Container>
          <Topbar />
        </Container>
      </div>

      <Footer incoming="CloudDash" />
    </div>
  );
};

export default CloudDash;
