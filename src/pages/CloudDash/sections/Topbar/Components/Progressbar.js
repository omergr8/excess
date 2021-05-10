import classes from "../Topbar.module.css";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="h5">
          <nobr>100 Gigs</nobr>
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  colorPrimary: {
    background: "white",
  },
  barColorPrimary: {
    backgroundColor: "#F19D19",
  },
  roott: {
    height: "42px",
    borderRadius: "10px",
  },
  heading: {
    fontSize: "31px",
  },
}));
const Progressbar = (props) => {
  const classes = useStyles();
  //   const [progress, setProgress] = React.useState(50);

  return (
    <div className={classes.root}>
      <h2 className={classes.heading}>SECURE CLOUD MEDIA STORAGE</h2>
      <LinearProgressWithLabel
        classes={{
          colorPrimary: classes.colorPrimary,
          barColorPrimary: classes.barColorPrimary,
          root: classes.roott,
        }}
        value={50}
      />
    </div>
  );
};
export default Progressbar;
