import Grid from "@material-ui/core/Grid";
import Leftbar from "./Leftbar/Leftbar";
import Totalbox from "./Totalbox/Totalbox";
import Comingsoon from "./Comingsoon/Comingsoon";
const Wrapper = () => {
  const wrapperStyle = {
    textAlign: "center",
    backgroundColor: "black",
  };
  return (
    <div style={wrapperStyle}>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={12}>
          <Leftbar />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Totalbox />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Comingsoon />
        </Grid>
      </Grid>
    </div>
  );
};
export default Wrapper;
