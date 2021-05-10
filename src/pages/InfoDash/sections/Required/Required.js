import React from "react";
import Container from "@material-ui/core/Container";
import classes from "./Required.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import lock from "../../../../Assets/lock.png";
const Required = () => {
  return (
    <div className={classes.border}>
      <div className={classes.header}>REQUIRED</div>

      <p>
        <span className={classes.tick}>&#10003;</span>Click Here to READ, SIGN,
        DATE{" "}
        <span className={classes.bulletPoints}>
          INDEPENDANT CONTRACTOR'S AGREEMENT
        </span>
      </p>
      <p>
        <span className={classes.tick}>&#10003;</span>Click Here to READ, SIGN,
        DATE INDEPENDANT CONTRACTOR'S AGREEMENT
      </p>
    </div>
  );
};
export default Required;
