import React, { useState } from "react";
import { withLayout } from "../routes/Layout";
import { Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNetworkRequest } from "../hooks/NetworkHook";

const useStyles = makeStyles((theme) => ({
  subContainer: {
    margin: "25px 0px",
  },
  navLinkStyle: {
    textDecoration: "none",
  },
}));

const AddDetails = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    name: "",
    mobileNumber: "",
  });
  const { name, mobileNumber } = state;

  const { refetch } = useNetworkRequest(
    "/api/users/create",
    {
      user_name: name,
      mobile_number: mobileNumber,
      created_at: new Date(),
      is_active: true,
    },
    "POST"
  );
  const { refetch: docsRefetch } = useNetworkRequest("/upload", null, "POST");

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleDocument = (e) => {
    console.log("docs", e.target.files);
    docsRefetch();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && mobileNumber !== "") {
      refetch();
      setState({
        ...state,
        name: "",
        mobileNumber: "",
      });
      if (window.confirm("User Registered")) {
        props.history.push("/userdetails");
      }
    }
  };
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={3}
      className={classes.subContainer}
    >
      <Grid item xs={12}>
        <TextField
          fullWidth
          required
          variant="outlined"
          margin="dense"
          label="Enter name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          required
          variant="outlined"
          margin="dense"
          label="Enter mobile number"
          name="mobileNumber"
          value={mobileNumber}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth color="primary" component="label" variant="contained">
          Upload Picture
          <input
            type="file"
            name="profile"
            style={{ display: "none" }}
            onChange={handleDocument}
          />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          type="submit"
          fullWidth
          color="secondary"
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export const Home = withLayout(AddDetails, "Add User Details");
