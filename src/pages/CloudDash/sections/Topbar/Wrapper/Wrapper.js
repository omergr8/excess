import Profile from "../../../../InfoDash/sections/Profile/Profile";
import Progressbar from "../Components/Progressbar";
import Buymore from "../Components/Buymore";
import Grid from "@material-ui/core/Grid";

const Wrapper = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={12}>
          <Profile />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Progressbar />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Buymore />
        </Grid>
      </Grid>
    </div>
  );
};
export default Wrapper;
