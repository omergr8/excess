import classes from "./Footer.module.css";

import Container from "@material-ui/core/Container";

import Ads from "../Ads/Ads";
const Footer = (props) => {
  var footerclassname;
  var textclassname;
  if (props.incoming === "InfoDash") {
    footerclassname = classes.infodashFooter;
    textclassname = classes.footerText;
  } else if (props.incoming === "RevTrkDash") {
    footerclassname = classes.revFooter;
    textclassname = classes.footerText;
  } else if (props.incoming === "PaidSubDash") {
    footerclassname = classes.revFooter;
    textclassname = classes.footerText;
  } else if (props.incoming === "CloudDash") {
    footerclassname = classes.cloudFooter;
    textclassname = classes.cloudfooterText;
  } else {
    footerclassname = classes.footer;
    textclassname = classes.freefooterText;
  }
  var adBox;
  if (props.incoming === "FreeSubDash") {
    adBox = <Ads />;
  } else {
    adBox = "";
  }
  return (
    <div className={footerclassname}>
      <Container maxWidth="lg">{adBox}</Container>

      <div className={textclassname}>
        <p>
          ALL COPYRIGHTS RESERVED 2020-2021 XCCESS, LLC, a subsidary of Remote
          Xccess
        </p>
      </div>
    </div>
  );
};
export default Footer;
