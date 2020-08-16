import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid } from "@material-ui/core";
import userService from "../../services/UserService";
import { toast } from "react-toastify";
const useStyles = makeStyles(theme => ({
  buttonStyle: {
    backgroundColor: "rgb(75, 8, 82)",
    color: "rgb(255, 255, 255)",
    "&:hover": {
      backgroundColor: "rgba(75, 8, 82,0.8)",
      color: "rgba(120, 255, 58, 1)"
    },
    "&:focus": {
      color: "rgba(120, 255, 58, 1)"
    }
  },
  headingStyle: {
    fontFamily: "Patrick Hand, cursive",
    textAlign: "center",
    marginTop: "3%"
    //backgroundColor: "rgba(120, 255, 58, 1)"
  },
  errorStyle: {
    color: "red"
  }
}));
const Register = props => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("areeba@gmail.com");
  const [password, setPassword] = React.useState("areeba");
  const [name, setName] = React.useState("Areeba");
  const [role, setRole] = React.useState("user");
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1 className={classes.headingStyle}>Signup/ Register Page</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="email"
          fullWidth
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="password"
          type="password"
          fullWidth
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          className={classes.buttonStyle}
          variant="contained"
          color="primary"
          onClick={e => {
            userService
              .register(name, email, password)
              .then(data => {
                console.log(data);
                document.getElementById("log").innerHTML = "";
                props.history.push("/login");
              })
              .catch(err => {
                console.log(err);
                document.getElementById("log").innerHTML =
                  "A user with this email already exists!";
                /*toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT
                });*/
              });
          }}
        >
          Register
        </Button>
        <div id="log" className={classes.errorStyle}></div>
      </Grid>
    </Grid>
  );
};

export default Register;
