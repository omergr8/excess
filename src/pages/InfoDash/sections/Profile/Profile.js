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
  var paragraphClass;
  if (props.incoming === "CloudDash") {
    paragraphClass = classes.cloudParagraph;
  } else {
    paragraphClass = classes.smalltext;
  }
  return (
    <div className={classes.profile}>
      <img src={profile} width="120px" alt="profile" />
      <h2 className={headingClass}>Mary Smith</h2>
      <p className={paragraphClass}>I.S.E.#146013</p>
    </div>
  );
};

export default Profile;
