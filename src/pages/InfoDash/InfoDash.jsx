import React from "react";
import Header from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import Profile from "./sections/Profile/Profile";
import Wrapper from "./sections/Wrapper";
import Container from "@material-ui/core/Container";
import classes from "./InfoDash.module.css";

const InfoDash = () => {
  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Header />
        <div className={classes.contentBackground}>
          <Wrapper />
        </div>
      </Container>
      <Footer incoming="InfoDash" />
    </div>
  );
};

export default InfoDash;
