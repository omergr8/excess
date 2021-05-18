import classes from "./Ads.module.css";
import Grid from "@material-ui/core/Grid";

const Ads = () => {
  return (
    <div className={classes.container}>
      <p>Google Textual Ad Space</p>
      <Grid container alignItems="center">
        <Grid item md={3} sm={6} xs={12}>
          <div className={classes.adBox}></div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className={classes.adBox}></div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className={classes.adBox}></div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className={classes.adBox}></div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Ads;
