import React from "react";
import styles from "../../FreeSubDash.module.css";
import Grid from "@material-ui/core/Grid";

const HeaderArea = () => {
  return (
    <div className={`${styles.headerSize}`}>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} xs={12}>
          <div className={styles.upgradeBox}>
            <p>
              <span>
                Upgrade <br />
              </span>
              for Cloud Storage and Revenue $$$ Opportunity
            </p>
          </div>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <div className={styles.flex}>
            <button id="launch" className={styles.launchButton}>
              LAUNCH FREE MEETING
            </button>
            <button id="logout" className={styles.logout}>
              Logout
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderArea;
