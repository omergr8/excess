import React from "react";
import styles from "../header.module.css";
import logoImg from "../../../../../Assets/XCCESSCOM TRANS2.png";
import Login from "./Modal/Login";
import Register from "./Modal/Register";

const Navbar = () => {
  return (
    <div className={`${styles.navContainer}`}>
      <div className={`${styles.headerSize2}`}>
        <div className="d-flex align-items-center justify-content-end mr-4">
          <img className={styles.logo} src={logoImg} width="150px" alt="" />
          <button id="register" className={`${styles.btn} mr-4`}>
            Register
          </button>
          <button id="login" className={styles.btn}>
            Login
          </button>
        </div>
      </div>
      <Login />
      <Register />
    </div>
  );
};

export default Navbar;
