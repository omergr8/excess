import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../../../Assets/XCCESSCOM TRANS2.png";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height: "10vh",
    zIndex: "9999999",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  inputRoot: {
    color: "inherit",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      paddingRight: "20px",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  color: {
    backgroundColor: "white",
    paddingBottom: "20px",
    zIndex: "999999999",
  },

  supportButton: {
    border: "2px solid #28A745",
    borderRadius: "6px",
  },
  dlButton: {
    border: "2px solid black",
    borderRadius: "6px",
  },
  dashboardButton: {
    marginLeft: "80px",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      paddingRight: "20px",
    },
  },
  launchButton: {
    marginLeft: "100px",
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "-15px",
    },
  },
  uButton: {
    fontSize: "15px",
    border: "2px solid black",
    borderRadius: "6px",
    backgroundColor: "#C00000",
    color: "white",

    [theme.breakpoints.down("md")]: {
      width: "200px",
      fontSize: "12px",
    },
  },
  lButton: {
    fontSize: "15px",
    border: "2px solid #C00000",
    borderRadius: "6px",
    backgroundColor: "#C00000",
    color: "white",
    width: "290px",
    [theme.breakpoints.down("md")]: {
      width: "200px",
      fontSize: "12px",
    },
  },
  betaText: {
    lineHeight: "0px",
    position: "relative",
    bottom: "-30px",
    textAlign: "right",

    marginLeft: "-42px",
    fontWeight: "550",
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  logoImage: {
    width: "170px",
    height: "55px",
    [theme.breakpoints.down("xs")]: {
      width: "130px",
      height: "40px",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  var launchbutton;
  if (props.incoming === "PaidSubDash") {
    launchbutton = (
      <Button variant="contained" className={classes.lButton}>
        LAUNCH FREE MEETING
      </Button>
    );
  } else if (props.incoming === "CloudDash") {
    launchbutton = (
      <Button variant="contained" className={classes.uButton}>
        UPLOAD
      </Button>
    );
  } else {
    launchbutton = "";
  }
  var positionApp;
  if (props.incoming === "InfoDash") {
    positionApp = "static";
  } else {
    positionApp = "relative";
  }
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button variant="outlined" className={classes.dlButton}>
          Dashboard
        </Button>
      </MenuItem>
      <MenuItem>{launchbutton}</MenuItem>
      <MenuItem>
        <Button variant="outlined" className={classes.supportButton}>
          Support
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button variant="outlined" className={classes.dlButton}>
          Logout
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.color} position={positionApp}>
        <Toolbar>
          <img src={logo} className={classes.logoImage} alt="" />
          <p className={classes.betaText}>BETA</p>
          <div className={classes.dashboardButton}>
            <Button variant="outlined" className={classes.dlButton}>
              Dashboard
            </Button>
          </div>
          <div className={classes.launchButton}>{launchbutton}</div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button variant="outlined" className={classes.supportButton}>
                  Support
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined" className={classes.dlButton}>
                  Logout
                </Button>
              </Grid>
            </Grid>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon style={{ color: "red" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
