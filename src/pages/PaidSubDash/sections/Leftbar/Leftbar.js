import classes from "./Leftbar.module.css";
import profile from "../../../../Assets/profile.png";
import cloudLogo from "../../../../Assets/character.png";
const Leftbar = () => {
  const spanText = <nobr>Upload Image</nobr>;
  return (
    <div className={classes.leftBar}>
      <div className={classes.profilePicture}>
        <img width="120px" src={profile} alt="profile" />
        <span className={classes.spanTextDesktop}>{spanText}</span>
      </div>
      <div className={classes.name}>
        <h2 className={classes.spanTextMobile}>{spanText}</h2>
        <h2>Mary Smith</h2>
        <p>I.S.E. I.D.#146013</p>
      </div>
      <div>CLOUD STORAGE</div>
      <div>
        <img src={cloudLogo} alt="character" />
      </div>

      <div>
        <p>I.S.E. PROFILE SETTINGS</p>
        <p>COMMISSION</p>
        <p>RESIDUALS</p>
        <p>SECURITY SETTINGS</p>
        <p>RESOURCES</p>
      </div>
    </div>
  );
};
export default Leftbar;
