import React from "react";
import Navbar from "./Components/Navbar";
import styles from "./header.module.css";

import HeaderArea from "./Components/HeaderArea";
import FooterBottom from "./Components/FooterBottom";
const Header = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        {/* <Navbar /> */}
        <HeaderArea />
      </div>
      <FooterBottom />
    </div>
  );
};

export default Header;
