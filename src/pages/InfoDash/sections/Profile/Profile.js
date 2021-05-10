import React from "react";
import classes from "./Profile.module.css";
import Grid from "@material-ui/core/Grid";
import profile from "../../../../Assets/profile.png";
const Profile = (props) => {
  var headingClass;
  if (props.incoming === "CloudDash") {
    headingClass = classes.cloudHeading;
  } else {
    headingClass = classes.heading;
  }
  return (
    <div className={classes.profile}>
      <img src={profile} width="120px" alt="profile" />
      <h2 className={headingClass}>Mary Smith</h2>
      <p className={classes.smallText}>I.S.E. I.D.#1465098</p>
    </div>
  );
};

export default Profile;
