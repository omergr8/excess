import React from "react";
import YellowBar from "../ContactUs/Component/YellowBar";
import TheXGrid from "./Components/TheXGrid";
import styles from "./thex.module.css";

const TheX = () => {
  return (
    <>
      <YellowBar />
      <div id="aboutus" className={`${styles.container} position-relative`}>

        <TheXGrid />
        {/* <p className={styles.textCopyright}>ALL COPYRIGHTS RESERVED  2020-2021 XCCESS, LLC, a subsidary of Remote Xccess</p> */}
      </div>
    </>
  );
};

export default TheX;
