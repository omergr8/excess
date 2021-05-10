import React from "react";
import classes from "../revenue.module.css";
import videoIcon from "../../../../../Assets/Camera Icon.png";
const RevenueOpportunity = () => {
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <div>
          <h2 className="text-center">REVENUE OPPORTUNITY</h2>
          <div className={classes.imgFirstGrid}></div>
        </div>
        <div style={{ justifySelf: "start", marginTop: "14%" }}>
          <div className={classes.btnContainer}>
            <button className={classes.unlimitedBtn}>
              Unlimited Earning Potential
            </button>
          </div>

          <ul className={classes.unorderedList}>
            <li>
              We empower our GOLD subscribers with a viable opportunity to earn
              generous commission and residuals promoting our video conferencing
              platform and secure cloud storage plans.
            </li>
            <li style={{ marginTop: "15px" }}>
              Subscribers can "opt-in" to become an Independent Sales Executive
              (I.S.E.) to generate income with XCCESS, LLC.
            </li>
            <li style={{ marginTop: "15px" }}>
              An I.S.E. can leverage our free video conferencing tools working
              from home to potentially earn significant long-term revenue and{" "}
              <span className="text-bold">XCCESS (XCS) digital tokens.</span>
            </li>
          </ul>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <button className={classes.videoBtn}>
              How It Works Video
              <img
                style={{ marginLeft: 10 }}
                src={videoIcon}
                width="40px"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueOpportunity;
