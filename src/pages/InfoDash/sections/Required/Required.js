import React from "react";
import Container from "@material-ui/core/Container";
import classes from "./Required.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import lock from "../../../../Assets/lock.png";
const Required = () => {
  return (
    <div>
      <div className={classes.border}>
        <div className={classes.header}>REQUIRED</div>

        <p>
          <span className={classes.tick}>&#10003;</span>Click Here to READ,
          SIGN, DATE{" "}
          <span className={classes.bulletPoints}>
            INDEPENDANT CONTRACTOR'S AGREEMENT
          </span>
        </p>
        <p>
          <span className={classes.tick}>&#10003;</span>
          UPLOAD CLEAR IMAGE OF FRONT AND BACK OF YOUR STATE DRIVER'S LICENSE OR
          STATE ID.
        </p>
      </div>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          UPLOAD
        </Button>
      </div>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          SAVE FOR LATER
        </Button>
      </div>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};
export default Required;
