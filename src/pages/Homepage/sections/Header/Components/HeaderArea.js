import React from "react";
import Login from "./Modal/Login";
import Register from "./Modal/Register";
import styles from "../header.module.css";
import headerImage from "../../../../../Assets/Cropped Image.jpg";
import logoImg from "../../../../../Assets/XCCESSCOM TRANS2.png";

const HeaderArea = () => {
  return (
    // <div className={`${styles.headerImageDiv} d-flex justify-content-center`}>
    <div className={`${styles.headerSize}`}>
      <div className="d-flex align-items-center justify-content-end mr-4">
        <div>
          <img className={styles.logo} src={logoImg} alt="" />
          <p className={styles.betaText}>BETA</p>
        </div>
        <button id="register" className={`${styles.btn} mr-4`}>
          Register
        </button>
        <button id="login" className={styles.btn}>
          Login
        </button>
      </div>
      <Login />
      <Register />
      {/* <img src={headerImage} width="100%" height="100%" alt="" /> */}
    </div>
    // </div>
  );
};

export default HeaderArea;
