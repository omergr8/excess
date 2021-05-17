import Profile from "../../../InfoDash/sections/Profile/Profile";
import Progressbar from "./Components/Progressbar";
import Buymore from "./Components/Buymore";
import Lefttable from "./Components/Lefttable";
import Grid from "@material-ui/core/Grid";
import classes from "./Topbar.module.css";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Topbar = () => {
  return (
    <div className={classes.root}>
      <Grid container style={{ paddingTop: "20px", backgroundColor: "black" }}>
        <Grid item md={3} xs={12}>
          <div style={{ textAlign: "center" }}>
            <Profile incoming="CloudDash" />
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <Progressbar />
        </Grid>
        <Grid item md={3} xs={12}>
          <Buymore />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12} xs={12}>
          <div className={classes.align}>
            <Lefttable />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Topbar;
