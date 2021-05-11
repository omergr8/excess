import React from "react";
import classes from "./RevTrkDash.module.css";
import Header from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import Banner from "./sections/Banner/Banner";
import Table from "./sections/Table/Table";
import Container from "@material-ui/core/Container";

const RevTrkDash = () => {
  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Header />
        <div className={classes.height}>
          <Banner />
          <Table />
        </div>
      </Container>
      <Footer incoming="RevTrkDash" />
    </div>
  );
};

export default RevTrkDash;
