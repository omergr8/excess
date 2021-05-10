import Profile from "../../../InfoDash/sections/Profile/Profile";
import Progressbar from "./Components/Progressbar";
import Buymore from "./Components/Buymore";
import Lefttable from "./Components/Lefttable";
import Righttable from "./Components/Righttable";
import Grid from "@material-ui/core/Grid";
import classes from "./Topbar.module.css";
const Topbar = () => {
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item lg={3} xs={12}>
          <div style={{ textAlign: "center" }}>
            <Profile incoming="CloudDash" />
          </div>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Progressbar />
        </Grid>
        <Grid item lg={3} xs={12}>
          <Buymore />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item lg={2} xs={12}></Grid>
        <Grid item lg={5} xs={12}>
          <div>
            <Lefttable />
          </div>
        </Grid>
        <Grid item lg={5} xs={12}>
          <Righttable />
        </Grid>
      </Grid>
    </div>
  );
};
export default Topbar;
