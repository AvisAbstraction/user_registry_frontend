import React, { useState, useEffect } from "react";
import { withLayout } from "../routes/Layout";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListComponent from "../components/ListComponent/ListComponent";
import { useNetworkRequest } from "../hooks/NetworkHook";

const useStyles = makeStyles((theme) => ({
  subContainer: {
    margin: "25px 0px",
  },
}));

const SearchDetails = (props) => {
  const classes = useStyles();

  const [mobileNumber, setMobileNumber] = useState("");

  const { data, refetch } = useNetworkRequest(
    "/api/users/getoneuser",
    {
      mobile_number: mobileNumber,
    },
    "POST"
  );
  const { data: totalCount, refetch: totalCountFetch } = useNetworkRequest(
    "/api/users/getallusers",
    null,
    "GET"
  );
  console.log("totalcount", totalCount);

  useEffect(() => {
    totalCountFetch();
  }, []);

  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <>
      <Typography
        component="p"
        variant="subtitle1"
        style={{ textAlign: "center" }}
      >
        <b>Total Users</b>: {totalCount && totalCount.data}
      </Typography>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={2}
        classes={classes.subContainer}
      >
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            variant="outlined"
            margin="dense"
            label="Enter mobile number"
            name="mobileNumber"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ListComponent data={data} />
        </Grid>
      </Grid>
    </>
  );
};

export const UserDetails = withLayout(SearchDetails, "Find User Details");
