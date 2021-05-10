import React from "react";
import styles from "../header.module.css";
import linkedin from "../../../../../Assets/linkedin.png";
import facebookLogo from "../../../../../Assets/facebook.png";
import twitter from "../../../../../Assets/twitter.png";
import instagram from "../../../../../Assets/instagram.png";
import youtube from "../../../../../Assets/youtube.png";
import classes from "../header.module.css";
import { Link } from "react-scroll";
import XReadHeadImage from "./../../../../../Assets/X RED CLOUD.jpg";

const FooterBottom = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.grid}>
          <div className={styles.col1}>
            <div>
              <img src={XReadHeadImage} width="170px" />
              <p style={{ margin: "auto", textAlign: "center" }}>
                Secure Cloud Storage
              </p>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.gridItems}>
              <p className={styles.textfooter}>
                <Link
                  activeClass="active"
                  to="subscription"
                  spy={false}
                  smooth={true}
                >
                  Subscription{" "}
                </Link>
              </p>
              <p className={styles.textfooter}>About Us</p>
              <p className={styles.textfooter}>
                <Link
                  activeClass="active"
                  to="contactus"
                  spy={false}
                  smooth={true}
                >
                  Contact Us
                </Link>
              </p>
            </div>
            <div className={styles.gridItems}>
              <a
                href="http://xccess.io/"
                target="_blank"
                className={styles.xcsTokenText}
              >
                <p className={styles.textfooter}>
                  xccess <span class={styles.bold}>xcs</span> tokens
                </p>
              </a>
              <Link
                activeClass="active"
                to="revenueOpportunity"
                spy={false}
                smooth={true}
              >
                <p className={styles.textfooter}>REVENUE OPPORTUNITY</p>
              </Link>

              <p className={styles.textfooter}>
                <Link
                  activeClass="active"
                  to="aboutus"
                  spy={false}
                  smooth={true}
                >
                  The X
                </Link>
              </p>
            </div>

            <div className={styles.gridItems}>
              <p className={styles.textfooter}>Terms & conditions</p>
              <p className={styles.textfooter}>privacy policy</p>
              <p className={styles.textfooter}>f.a.q</p>
            </div>
          </div>
          <div className={styles.col3}>
            <button className={styles.goldenBtn}>
              <span className={styles.bold}>Access</span> to Economic Equity via{" "}
              <span className={styles.bold}>XCCESS</span>
            </button>
          </div>

          <div className={styles.col4}>
            <div className={classes.logoDiv}>
              <a href="https://www.facebook.com/RemoteXccess" target="_blank">
                <img src={facebookLogo} width="100%" alt="logo" />{" "}
              </a>
            </div>
            <div className={classes.logoDiv}>
              <a href="#">
                <img src={linkedin} width="100%" alt="logo" />
              </a>
            </div>
            <div className={classes.logoDiv}>
              <a href="https://www.twitter.com/RemoteXccess" target="_blank">
                <img src={twitter} width="100%" alt="logo" />
              </a>
            </div>
            <div className={classes.logoDiv}>
              <a href="https://www.instagram.com/Xccess" target="_blank">
                <img src={instagram} width="100%" alt="logo" />
              </a>
            </div>
            <div className={classes.logoDiv}>
              <a href="#">
                <img src={youtube} width="100%" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterBottom;
