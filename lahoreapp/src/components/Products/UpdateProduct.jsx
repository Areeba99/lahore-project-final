import React from "react";
import { Grid, TextField, Button, makeStyles } from "@material-ui/core";
import productService from "../../services/ProductsService";
import Auth from "../auth/Auth";
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

const UpdateProduct = props => {
  const classes = useStyles();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [imageurl, setImageurl] = React.useState("");

  const id = props.match.params.id;
  React.useEffect(() => {
    productService.getSingleProduct(id).then(data => {
      setName(data.name);
      setDescription(data.description);
      setPrice(data.price);
      setImageurl(data.imageurl);
    });
  }, []);
  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className={classes.headingStyle}>Update Product</h1>
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
            label="Product Description"
            fullWidth
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            label="Price"
            fullWidth
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
          />
          <TextField
            label="Image URL"
            fullWidth
            value={imageurl}
            onChange={e => {
              setImageurl(e.target.value);
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
              productService
                .updateProduct(id, { name, description, price, imageurl })
                .then(data => {
                  console.log(data);
                  document.getElementById("log").innerHTML = "";
                  props.history.push("/souvenirshop");
                })
                .catch(err => {
                  console.log(err);
                  document.getElementById("log").innerHTML =
                    "An error occurred, recheck all values!";
                });
            }}
          >
            Update
          </Button>
          <div id="log" className={classes.errorStyle}></div>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default UpdateProduct;
