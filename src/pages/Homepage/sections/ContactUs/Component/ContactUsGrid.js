import React, { useEffect, useState } from "react";
import styles from "../contactus.module.css";
import building from "../../../../../Assets/Xccess Ofc Location Image for Contact Page.jpg";
import linkedin from "../../../../../Assets/linkedin.png";
import facebookLogo from "../../../../../Assets/facebook.png";
import twitter from "../../../../../Assets/twitter.png";
import instagram from "../../../../../Assets/instagram.png";
import youtube from "../../../../../Assets/youtube.png";
import GoogleMapReact from "google-map-react";
import classes from "../contactus.module.css";
import { useMediaQuery } from "react-responsive";
const ContactUsGrid = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 860px)` });

  return (
    <div className={classes.containerCenter}>
      <div className={styles.gridContainer}>
        <div
          style={{ justifySelf: "center", order: 2 }}
          className={styles.gridItem1}
        >
          <form action="" style={{ maxWidth: "500px", margin: "auto" }}>
            <h2></h2>
            <div class={classes.inputContainer}>
              <i className={`${classes.icon} fa fa-user`}></i>
              <input
                class={classes.inputField}
                type="text"
                placeholder="Username"
                name="usrnm"
              />
            </div>

            <div class={classes.inputContainer}>
              <i className={`${classes.icon} fa fa-envelope`}></i>
              <input
                class={classes.inputField}
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>

            <div class={classes.inputContainer}>
              <i class={`${classes.icon} fa fa-phone`}></i>
              <input
                class={classes.inputField}
                type="text"
                placeholder="Phone No"
                name="phone"
              />
            </div>
            <label style={{ fontSize: "12px", marginLeft: "5px" }}>
              Message (250 word limit)
            </label>
            <textarea
              className={classes.textArea}
              name="w3review"
              rows="10"
              cols="50"
              placeholder="Write Message Here..."
            ></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <button className={classes.btnForm}>Preview</button>
              <button
                style={{ background: "dodgerblue" }}
                className={classes.btnForm}
              >
                Submit
              </button>
            </div>
          </form>
          {isMobile && (
            <div
              style={{ justifyContent: "center", marginTop: 20 }}
              className={styles.gridItemSocialIcons}
            >
              <div className={styles.logoDiv}>
                <a href="https://www.facebook.com/RemoteXccess" target="_blank">
                  <img src={facebookLogo} width="100%" alt="logo" />{" "}
                </a>
              </div>
              <div className={styles.logoDiv}>
                <a href="#">
                  <img src={linkedin} width="100%" alt="logo" />
                </a>
              </div>
              <div className={styles.logoDiv}>
                <a href="https://www.twitter.com/RemoteXccess" target="_blank">
                  <img src={twitter} width="100%" alt="logo" />
                </a>
              </div>
              <div className={styles.logoDiv}>
                <a href="https://www.instagram.com/Xccess" target="_blank">
                  <img src={instagram} width="100%" alt="logo" />
                </a>
              </div>
              <div className={styles.logoDiv}>
                <a href="#">
                  <img src={youtube} width="100%" alt="logo" />
                </a>
              </div>
            </div>
          )}
        </div>
        {/* Grid 2 */}
        <div style={{ order: 1 }}>
          <h1>Contact Us</h1>
          <div
            style={{ position: "relative" }}
            className={classes.imgSecondGrid}
          >
            <div style={{ position: "absolute", top: "20px", left: "20px" }}>
              <span style={{ fontSize: "20px" }}>XCCESS, LLC</span>
              <br />
              <span style={{ marginTop: 4, display: "inline-block" }}>
                14502 Greenview Dr Suite #300a
              </span>
              <br />
              <span style={{ marginTop: 4, display: "inline-block" }}>
                Laurel, MD 20708
              </span>
            </div>
          </div>
          <br />

          {!isMobile && (
            <div className={styles.gridItemSocialIcons}>
              <div className={styles.logoDiv}>
                <a href="https://www.facebook.com/RemoteXccess" target="_blank">
                  <img src={facebookLogo} width="100%" alt="logo" />{" "}
                </a>
              </div>
              <div className={styles.logoDiv}>
                <a href="#">
                  <img src={linkedin} width="100%" alt="logo" />
                </a>
              </div>
              <div className={styles.logoDiv}>
                <a href="https://www.twitter.com/RemoteXccess" target="_blank">
                  <img src={twitter} width="100%" alt="logo" />
                </a>
              </div>
              <div className={styles.logoDiv}>
                <a href="https://www.instagram.com/Xccess" target="_blank">
                  <img src={instagram} width="100%" alt="logo" />
                </a>
              </div>
              <div className={styles.logoDiv}>
                <a href="#">
                  <img src={youtube} width="100%" alt="logo" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUsGrid;
