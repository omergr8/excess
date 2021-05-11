import React from "react";
import classes from "./PaidSubDash.module.css";
import Header from "../Common/Navbar/Navbar";
import Wrapper from "./sections/Wrapper";
import Footer from "../Common/Footer/Footer";
import Container from "@material-ui/core/Container";
const PaidSubDash = () => {
  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Header incoming="PaidSubDash" />
        <div>
          <Wrapper />
        </div>
      </Container>
      <Footer incoming="PaidSubDash" />
    </div>
  );
};

export default PaidSubDash;
