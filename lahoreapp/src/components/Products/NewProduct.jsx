import React from "react";
//import { Grid, TextField, Button } from "@material-ui/core";
import { Grid, TextField, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import Auth from "../auth/Auth";
const NewProduct = props => {
  //console.log(props);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [imageurl, setImageurl] = React.useState("");
  return (
    //  <div>New Products page....</div>
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Add New Product</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="name"
            fullWidth
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="describe your product"
            fullWidth
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            label="price"
            fullWidth
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
          />
          <TextField
            label="image url"
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
            variant="contained"
            color="primary"
            onClick={e => {
              productService
                .addProduct({ name, description, price, imageurl })
                .then(data => {
                  console.log(data);
                  props.history.push("/souvenirshop/");
                })
                .catch(err => {
                  console.log(err);
                });
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default NewProduct;
