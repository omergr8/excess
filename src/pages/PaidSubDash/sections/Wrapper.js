import Grid from "@material-ui/core/Grid";
import Leftbar from "./Leftbar/Leftbar";
import Totalbox from "./Totalbox/Totalbox";
import Comingsoon from "./Comingsoon/Comingsoon";
const Wrapper = () => {
  const wrapperStyle = {
    textAlign: "center",
    backgroundColor: "black",
    minHeight: "70vh",
  };
  return (
    <div style={wrapperStyle}>
      <Grid container>
        <Grid item md={4} xs={12}>
          <Leftbar />
        </Grid>
        <Grid item md={4} xs={12}>
          <Totalbox />
        </Grid>
        <Grid item md={4} xs={12}>
          <Comingsoon />
        </Grid>
      </Grid>
    </div>
  );
};
export default Wrapper;
