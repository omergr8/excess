import classes from "./Totalbox.module.css";
import Tokenbox from "./Component/Tokenbox/Tokenbox";
import Grid from "@material-ui/core/Grid";
import imagee from "../../../../Assets/Group Video Conferencing on XCCESS1.jpg";
const Toolbox = () => {
  return (
    <div className={classes.leftBar}>
      <Grid container spacing={3}>
        <Grid item lg={2} xs={12}></Grid>
        <Grid item lg={5} xs={12}>
          <Tokenbox text="TOTAL XCS TOKEN BONUSES" amount={100} />
        </Grid>
        <Grid item lg={5} xs={12}>
          <Tokenbox text="TOTAL FREE XCS TOKEN" amount={1900} />
        </Grid>
        <Grid item lg={12} xs={12}>
          <img className={classes.image} src={imagee} alt="random" />
        </Grid>
      </Grid>
    </div>
  );
};
export default Toolbox;
