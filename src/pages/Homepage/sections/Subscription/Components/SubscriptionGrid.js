import React from "react";
import styles from "../subscription.module.css";
import gridImage1 from "../../../../../Assets/XCCESS Video Conf Image.jpg";
import gridImage2 from "../../../../../Assets/XCCESS APP WITH GUY.jpg";
import character from "../../../../../Assets/character.png";
import classes from "../subscription.module.css";

const registerOpenHandler = () => {
  var modalHide = document.getElementById("myModalLogin");
  modalHide.style.display = "none";
  var modal = document.getElementById("myModalRegister");
  modal.style.display = "block";
};
const SubscriptionGrid = () => {
  return (
    <div className={styles.grid}>
      <div
        style={{ order: 1, justifySelf: "end" }}
        className={styles.gridItems}
      >
        <div style={{ height: "auto" }}>
          <img
            className={`${styles.border} ${styles.boxSizing}`}
            src={gridImage1}
            width="100%"
            height="116%"
            alt=""
          />
        </div>
        <div style={{ height: "auto" }} className={`${styles.borderBottom}`}>
          <div className={styles.gridItemsGrid}>
            <span className={styles.freeText}>FREE</span>
          </div>
        </div>
        <div style={{ height: "auto" }} className={` position-relative`}>
          <div style={{ paddingLeft: "20px" }}>
            <span
              style={{ marginTop: 12 }}
              className={`${styles.benefitsText}`}
            >
              BENEFITS
            </span>
          </div>
          <ul
            style={{
              padding: "0",
              paddingLeft: "10px",
            }}
            className={`${styles.listStyle} ${styles.unorderedList}`}
          >
            <li>
              Unlimited Live Video Conferencing <br />
              <pre style={{ fontSize: "12px" }}>(Up to 75 Participants)</pre>
            </li>
            <li>Invite Prospects or Clients</li>
            <li>Give Presentations and Close deals</li>
            <li>Share screen with participants</li>
            <li> Conduct Training or Consult</li>
            <li>Livestream on social media (YouTube)</li>
            <li>Live Chat with friends and family</li>
            <li>End-to-End Encryption Available</li>
          </ul>
          <div className={`${classes.textCenter} `}>
            <span
              id="register"
              className={`${classes.launchText} ${classes.positionRelativeLaunch}`}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                  // border: "inherit",
                  // background: "none",
                  // fontSize: "inherit",
                  // fontWeight: "inherit",
                  // padding: "inherit",
                  // boxSizing: "border-box"
                }}
                onClick={registerOpenHandler}
              >
                REGISTER
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* Grid 2 */}
      <div className={`${styles.gridItems} ${classes.grid2Subscriber}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "18px 16px",
          }}
          className={`${classes.priceDiv} ${classes.textCenter}`}
        >
          <span className={`${styles.benefitsText}`}>BENEFITS:</span>
          <span
            style={{ fontSize: "28px", fontWeight: "bolder", display: "flex" }}
          >
            $299
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "8px",
                marginLeft: "4px",
              }}
            >
              {" "}
              <span> PER</span> <span> YEAR</span>
            </div>
          </span>
          <span className={classes.launchText}>Buy Now </span>
        </div>
        <div className={`${classes.padding}`}>
          <ul
            style={{ margin: 0, padding: 0 }}
            className={`${styles.listStyle} ${styles.unorderedList}`}
          >
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}> 300 GIGS </span> of Secure
              Multi-Use Cloud Storage
            </li>
            <li style={{ marginTop: "7px" }}>
              Option to store meetings to your cloud account
            </li>
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>270 FREE</span> Prelaunch{" "}
              <span className={classes.fontBold}>XCCESS (XCS)</span> Tokens
            </li>
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>Commission & Residual</span>{" "}
              Revenue Opportunity
            </li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 16px",
            marginTop: "7%",
          }}
          className={`${classes.priceDiv} ${classes.textCenter}`}
        >
          <span className={`${styles.benefitsText}`}>BENEFITS:</span>
          <span
            style={{ fontSize: "28px", fontWeight: "bolder", display: "flex" }}
          >
            $499
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "8px",
                marginLeft: "4px",
              }}
            >
              {" "}
              <span> PER</span> <span> YEAR</span>
            </div>
          </span>
          <span className={classes.launchText}>Buy Now </span>
        </div>
        <div className={`${classes.padding}`}>
          <ul
            style={{ margin: 0, padding: 0 }}
            className={`${styles.listStyle} ${styles.unorderedList}`}
          >
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>500 GIGS</span> of Secure
              Multi-Use Cloud Storage
            </li>
            <li style={{ marginTop: "7px" }}>
              Option to store meetings to your cloud account
            </li>
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>450 FREE</span> Prelaunch{" "}
              <span className={classes.fontBold}>XCCESS (XCS) </span> Tokens
            </li>
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>Commission & Residual</span>{" "}
              Revenue Opportunity
            </li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 16px",
            marginTop: "7%",
          }}
          className={`${classes.priceDiv} ${classes.textCenter}`}
        >
          <span className={`${styles.benefitsText}`}>BENEFITS:</span>
          <span
            style={{ fontSize: "28px", fontWeight: "bolder", display: "flex" }}
          >
            $999
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "8px",
                marginLeft: "4px",
              }}
            >
              {" "}
              <span> PER</span> <span> YEAR</span>
            </div>
          </span>
          <span className={classes.launchText}>Buy Now </span>
        </div>
        <div className={`${classes.padding}`}>
          <ul
            style={{ margin: 0, padding: 0, boxSizing: "border-box" }}
            className={`${styles.listStyle} ${styles.unorderedList}`}
          >
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>1 TB</span> of Secure Multi-Use
              Cloud Storage
            </li>
            <li style={{ marginTop: "7px" }}>
              Option to store meetings to your cloud account
            </li>
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>900 FREE</span> Prelaunch{" "}
              <span className={classes.fontBold}>XCCESS (XCS)</span> Tokens
            </li>
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>Commission & Residual</span>{" "}
              Revenue Opportunity
            </li>
          </ul>
        </div>

        <h3 style={{ marginBottom: 0 }} className={classes.textCenter}>
          Get 10% OFF
        </h3>
        <h3
          style={{ marginTop: 5, paddingTop: 0, marginBottom: 5 }}
          className={classes.textCenter}
        >
          {" "}
          w/Discount Code
        </h3>
        <div className={classes.textCenter}>
          <span
            style={{ marginTop: 5, marginBottom: 10 }}
            className={classes.launchText}
          >
            Buy Now{" "}
          </span>
        </div>
      </div>

      {/* Grid 3 */}
      <div
        style={{
          order: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          background: "black",
          height: "auto",
          paddingBottom: "23px",
        }}
      >
        <div
          style={{ width: "100%" }}
          className={`${styles.gridItems} ${styles.gridItembusiness2}`}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ height: "28.5%", width: "80%" }}>
              <img
                className={`${styles.border} ${styles.boxSizing}`}
                src={gridImage2}
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </div>
          <div
            style={{ marginTop: 0 }}
            className={`${classes.heading2ndItem} ${classes.grid3Bar}`}
          >
            <div className={classes.textCenter}>
              <span style={{ fontSize: "15px" }}>
                CLOUD STORAGE + REVENUE OPPORTUNITY
              </span>
            </div>
          </div>
          <div style={{ marginTop: "15px", marginLeft: "19px" }}>
            {" "}
            <span className={`${styles.benefitsText}`}>BENEFITS:</span>
          </div>
          <div style={{ height: "auto" }}>
            <ul
              style={{
                margin: 0,
                padding: "0px 0px 0px 10px",
                position: "relative",
                width: "100%",
                boxSizing: "border-box",
              }}
              className={`${styles.listStyle} ${styles.unorderedList}`}
            >
              <li>
                Earn Generous Commission and Residuals
                <br />
                from our Secure Cloud Plans{" "}
                <pre style={{ fontSize: "10px", display: "inline" }}>
                  {" "}
                  *(Excluding $99 Plan)
                </pre>
              </li>
              <li>
                Leverage our <span className={classes.fontBold}>FREE</span>{" "}
                video conferencing tools{" "}
              </li>
              <li>Paid Weekly for Flexible Remote Work</li>
              <li>Convenient Online Training Provided</li>
              <li style={{ position: "relative" }}>
                X ChatBot Support{" "}
                <img
                  src={character}
                  width="50px"
                  alt=""
                  style={{ position: "absolute", bottom: "-4px" }}
                />{" "}
                <span style={{ marginLeft: "50px" }}>Cloud Protection </span>
              </li>
              {/* <li>Crypto-Currency Blockchain training</li> */}
              {/* <li>
                X ChatBot Support
              <div style={{ position: "absolute", left: "42%", top: "80%" }}>
                  <img src={character} width="50px" alt="" />
                </div>
              </li> */}
            </ul>
            <div
              style={{ border: "none" }}
              className={`${classes.heading2ndItem} ${classes.grid3Bar}`}
            >
              <div>
                <span style={{ fontSize: "18px" }}>
                  <span
                    style={{ fontWeight: "bolder" }}
                    className={classes.goldTextClass}
                  >
                    GOLD
                  </span>{" "}
                  Multi-Use Cloud Storage Plans
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                padding: "0px 10px",
                justifyContent: "space-between",
                marginTop: "3%",
              }}
              className={`${classes.priceDiv} ${classes.textCenter}`}
            >
              <span className={`${styles.benefitsText}`}>BENEFITS:</span>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "bolder",
                  display: "flex",
                }}
              >
                $99
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "8px",
                    marginLeft: "4px",
                  }}
                >
                  {" "}
                  <span> PER</span> <span> YEAR</span>
                </div>
              </span>
              <span className={classes.launchText}>Buy Now </span>
            </div>

            <ul
              style={{
                margin: 0,
                padding: "0px 0px 0px 10px",
                position: "relative",
                width: "100%",
                boxSizing: "border-box",
              }}
              className={`${styles.listStyle} ${styles.unorderedList}`}
            >
              <li>
                {" "}
                <span className={classes.fontBold}>100 GIGS</span> of Secure
                Multi-Use Cloud Storage
              </li>
              <li>Option to store meetings to your cloud account</li>
              <li>
                <span className={classes.fontBold}>90 FREE </span>Prelaunch
                XCCESS (XCS) Tokens
              </li>
            </ul>

            <div style={{ fontSize: "10px" }} className={classes.textCenter}>
              * No Revenue Opportunity for $99 Plan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionGrid;
