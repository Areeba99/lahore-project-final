import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  headingStyle: {
    fontFamily: "Patrick Hand, cursive",
    textAlign: "left",
    margin: "3%"
    //backgroundColor: "rgba(120, 255, 58, 1)"
  }
}));
const ContactPage = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className={classes.headingStyle}>
            Contact us for any further queries:
          </h1>
        </Grid>
        <Grid item xs={5}></Grid>

        <Grid item xs={2}>
          <a href="" title="facebook">
            <i class="fa fa-facebook-f"></i>
          </a>
          <a href="" title="twitter">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="" title="instagram">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="" title="dribble">
            <i class="fa fa-dribbble"> </i>
          </a>
          <a href="" title="linkedin">
            <i class="fa fa-linkedin"> </i>
          </a>
        </Grid>
        <Grid item xs={5}></Grid>

        <Grid item xs={3}></Grid>
        <Grid item xs={2}>
          Or email us at:
        </Grid>
        <Grid item xs={2}>
          <i class="fa fa-envelope"></i>
          admin@gmail.com
        </Grid>
        <Grid item xs={5}></Grid>

        <Grid item xs={3}></Grid>
        <Grid item xs={2}>
          Phone number:
        </Grid>

        <Grid item xs={2}>
          <i class="fa fa-phone"></i>
          0-900-786840-1
        </Grid>
        <Grid item xs={5}></Grid>

        <Grid item xs={3}></Grid>
        <Grid item xs={2}>
          Address:
        </Grid>
        <Grid item xs={2}>
          <i class="fa fa-address-card"></i>
          Lahore, Pakistan
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
      <Grid item xs={12}></Grid>
    </>
  );
};

export default ContactPage;
