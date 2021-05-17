import React from "react";
import Container from "@material-ui/core/Container";
import classes from "./Forum.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import lock from "../../../../Assets/lock.png";
const Forum = () => {
  return (
    <div>
      <form className={classes.formInline} action="/action_page.php">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div className={classes.center}>
              <span>
                <img width="18px" src={lock} alt="lock" />
              </span>
              <span className={classes.heading1}> REQUIRED INFORMATION</span>
            </div>
            <div className={classes.flex}>
              <label for="myInput">Full Legal Name:</label>
              <input className={classes.largeInput} type="text" id="myInput" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.flex}>
              <label for="myInput">Current Address:</label>
              <input className={classes.largeInput} type="text" id="myInput" />
            </div>
          </Grid>
          <Grid item lg={7} md={12} xs={12}>
            <div className={classes.flex}>
              <label for="myInput">City:</label>
              <input className={classes.largeInput} type="text" id="myInput" />
            </div>
          </Grid>
          <Grid item lg={5} md={12} xs={12}>
            <div className={classes.flex}>
              <label for="myInput">
                <nobr>Zip Code:</nobr>
              </label>
              <input className={classes.largeInput} type="text" id="myInput" />
            </div>
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <div className={classes.flex}>
              <label for="myInput">State:</label>
              <input className={classes.largeInput} type="text" id="myInput" />
            </div>
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <div className={classes.flex}>
              <label for="myInput">Country:</label>
              <input className={classes.largeInput} type="text" id="myInput" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.center}>
              <span>
                <img width="18px" src={lock} alt="lock" />
              </span>
              <span className={classes.taxText}>
                {" "}
                FOR TAX REPORTING PURPOSES
              </span>
            </div>
            <div className={classes.flex}>
              <label for="myInput">Social Security Number:</label>
              <input className={classes.largeInput} type="text" id="myInput" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.center}>
              <span className={classes.heading2}>
                I.S.E. COMPENSATION METHOD
              </span>
            </div>
            <div className={classes.flex}>
              <label for="myInput">PayPal ID:</label>
              <input className={classes.largeInput} type="text" id="myInput" />
            </div>
            OR
          </Grid>
          <Grid item xs={12}>
            <div className={classes.center}>
              <span>
                <img width="18px" src={lock} alt="lock" />
              </span>
              DIRECT DEPOSIT
            </div>
            <div className={classes.flex}>
              <label for="myInput">Account's Holder Name:</label>
              <input className={classes.largeInput} type="text" id="myInput" />
              <label className={classes.desktopLabel} for="myInput">
                (Must be your name)
              </label>
            </div>
            <div className={classes.mobileLabel}>
              <label for="myInput">(Must be your name)</label>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.flex}>
              <label for="myInput">Bank Name:</label>
              <input className={classes.largeInput} type="text" id="myInput" />
            </div>
          </Grid>
          <Grid item lg={6} xs={12}>
            <div className={classes.flex}>
              <label for="myInput">Routing Number:</label>
              <input className={classes.largeInput} type="text" id="myInput" />
            </div>
          </Grid>
          <Grid item lg={6} xs={12}>
            <div className={classes.flex}>
              <label for="myInput">Account Number:</label>
              <input className={classes.largeInput} type="text" id="myInput" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <p className={classes.note}>
                <span>NOTE:</span> If no PayPal account or direct deposit any
                commission and/or residual payment due will be mailed every
                Friday to above address.
              </p>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Forum;
