import classes from "./Leftbar.module.css";
import profile from "../../../../Assets/profile.png";
import cloudLogo from "../../../../Assets/character.png";
const Leftbar = () => {
  return (
    <div className={classes.leftBar}>
      <div className={classes.profilePicture}>
        <img width="120px" src={profile} alt="profile" />
        <span>Upload Image</span>
      </div>
      <div className={classes.name}>
        <h2>Mary Smith</h2>
        <p>I.S.E. I.D.#1465098</p>
      </div>
      <div>CLOUD STORAGE</div>
      <div>
        <img src={cloudLogo} alt="character" />
      </div>
      <div>I.S.E. PROFILE SETTINGS</div>
      <div>
        <p>COMMISSION</p>
        <p>RESIDUALS</p>
        <p>SECURITY SETTINGS</p>
        <p>RESOURCES</p>
      </div>
    </div>
  );
};
export default Leftbar;
