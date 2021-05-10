import React from "react";
import TheX from "./sections/TheX/TheX";
import ContactUs from "./sections/ContactUs/ContactUs";
import Header from "./sections/Header/Header";
import Subscription from "./sections/Subscription/Subscription";
import Revenue from "./sections/RevenueOpportunity/Revenue";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Subscription />
      <Revenue />
      <TheX />
      <ContactUs />
    </div>
  );
};

export default Homepage;
