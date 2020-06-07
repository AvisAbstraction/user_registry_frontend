import React from "react";
import { Grid, Typography, Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#C3CBE3",
    minHeight: "100vh",
  },
  paper: {
    padding: 25,
    marginTop: 20,
    boxShadow: "0 35px 20px #777",
  },
  mainContainer: {
    minHeight: "100vh",
    padding: "15px 15px 15px 15px",
  },
  headerText: {
    textAlign: "center",
  },
  containerStyle: {
    margin: "30px 0px",
    padding: "30px 0px",
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const { component: Component, title, ...rest } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item xs={12} sm={7} md={5}>
          <Paper className={classes.paper}>
            <Container>
              <Typography
                style={{ textAlign: "center" }}
                variant="h6"
                component="h6"
                gutterBottom
              >
                <b>{title}</b>
              </Typography>

              <Grid
                container
                justify="center"
                className={classes.containerStyle}
              >
                <Grid item xs={12}>
                  <Component {...rest} />
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export const withLayout = (Component, title) => (props) => {
  return <Layout title={title} {...props} component={Component} />;
};
