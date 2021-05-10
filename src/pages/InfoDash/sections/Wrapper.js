import Forum from "./Forum/Forum";
import Profile from "./Profile/Profile";
import Required from "./Required/Required";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Wrapper = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Grid container spacing={2}>
        <Grid item lg={4} md={12} xs={12}>
          <Profile />
        </Grid>
        <Grid item lg={5} md={12} xs={12}>
          <Forum />
        </Grid>
        <Grid item lg={3} md={12} xs={12}>
          <Required />
        </Grid>
      </Grid>
    </div>
  );
};
export default Wrapper;
