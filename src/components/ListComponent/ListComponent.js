import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  listItemTextStyle: {
    textAlign: "center",
  },
}));

const ListComponent = (props) => {
  const classes = useStyles();
  return (
    <List>
      {props.data &&
        props.data.data.map((elem, index) => {
          return (
            <ListItem key={index}>
              <ListItemText classes={classes.listItemTextStyle}>
                <Typography component="p" variant="subtitle1">
                  <b>Name</b>: {elem.name}
                </Typography>
                <Typography component="p" variant="subtitle1">
                  <b>Mobile Number</b>: {elem.mobile_number}
                </Typography>
                <Typography component="p" variant="subtitle1">
                  <b>Date of Registration</b>:{" "}
                  {moment(elem.createdAt).format("DD/MM/YYYY")}
                </Typography>
              </ListItemText>
            </ListItem>
          );
        })}
    </List>
  );
};

export default ListComponent;
