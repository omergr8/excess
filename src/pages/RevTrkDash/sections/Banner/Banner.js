import React, { useState } from "react";
import classes from "./Banner.module.css";
import Grid from "@material-ui/core/Grid";
import profile from "../../../../Assets/profile.png";
const Banner = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <div className={classes.border}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <div className={classes.profilePicture}>
              <img src={profile} width="120px" alt="profile" />
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <div className={classes.search}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <h2 className={classes.adjustment}>COMMISSION</h2>
                </Grid>
                <Grid item xs={12}>
                  <h3>WEEKLY GROSS INCOME</h3>
                </Grid>
                <Grid item lg={11} md={11} xs={12}>
                  <div>
                    <input
                      className={classes.searchBox}
                      size="40"
                      type="text"
                      placeholder="Search"
                    ></input>
                  </div>
                </Grid>
                <Grid item lg={1} md={1} xs={12}>
                  <button className={classes.searchButton}>GO</button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Banner;
