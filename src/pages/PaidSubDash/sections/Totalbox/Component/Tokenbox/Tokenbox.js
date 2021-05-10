import classes from "./Tokenbox.module.css";

const Wrapper = (props) => {
  return (
    <div className={classes.text}>
      <p>{props.text}</p>
      <div className={classes.box}>{props.amount}</div>
    </div>
  );
};
export default Wrapper;
