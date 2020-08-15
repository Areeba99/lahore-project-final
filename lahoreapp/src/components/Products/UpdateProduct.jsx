import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import productService from "../../services/ProductsService";
import Auth from "../auth/Auth";

const UpdateProduct = props => {
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
          <h1>Update Product</h1>
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
            label="description"
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
                .updateProduct(id, { name, description, price, imageurl })
                .then(data => {
                  console.log(data);
                  props.history.push("/souvenirshop");
                })
                .catch(err => {
                  console.log(err);
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default UpdateProduct;
