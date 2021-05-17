import Forum from "./Forum/Forum";
import Profile from "./Profile/Profile";
import Required from "./Required/Required";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Wrapper = () => {
  const wrapper = {
    textAlign: "center",
    paddingTop: "20px",
  };
  return (
    <div style={wrapper}>
      <Grid container>
        <Grid item lg={3} md={3} xs={12}>
          <Profile />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Forum />
        </Grid>
        <Grid item lg={3} md={3} xs={12}>
          <Required />
        </Grid>
      </Grid>
    </div>
  );
};
export default Wrapper;
