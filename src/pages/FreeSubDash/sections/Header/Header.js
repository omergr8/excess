import React from "react";
import styles from "../../FreeSubDash.module.css";
import Grid from "@material-ui/core/Grid";

const HeaderArea = () => {
  return (
    <div className={`${styles.headerSize}`}>
      <div className={styles.flex}>
        <div className={styles.flexGrow1}>
          <div className={styles.upgradeBox}>
            <p>
              <span>
                Upgrade <br />
              </span>
              for Cloud Storage and Revenue $$$ Opportunity
            </p>
          </div>
        </div>

        <div className={styles.flexGrow2}>
          <button id="launch" className={styles.launchButton}>
            LAUNCH FREE MEETING
          </button>
        </div>
        <div className={styles.flexGrow3}>
          <button id="logout" className={styles.logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderArea;
