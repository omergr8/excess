import classes from "../Topbar.module.css";
import logo from "../../../../../Assets/X RED CLOUD.jpg";
const Buymore = () => {
  return (
    <div className={classes.flex}>
      <div className={classes.used}>
        <p className={classes.spaceTextUsed}>used</p>
      </div>
      <div className={classes.logo}>
        <img src={logo} width="145px" alt="log" />
        <p className={classes.imageText}>
          <b>Buy More</b>
          <br /> Cloud Storage
        </p>
      </div>
      <div className={classes.unUsed}>
        <p className={classes.spaceTextunUsed}>
          <nobr>not used</nobr>
        </p>
      </div>
    </div>
  );
};
export default Buymore;
