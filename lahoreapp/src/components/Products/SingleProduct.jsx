import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import CartProduct from "../ShoppingCart/CartProduct";
import CartModal from "../ShoppingCart/CartModal";
import { ProductContext } from "../Reducer/ProductContext";

const useStyles = makeStyles(theme => ({
  fabstyle: {
    bottom: theme.spacing(1),
    //margin: "auto",
    margin: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center",
    background: "rgb(75, 8, 82)",
    "&:hover": {
      background: "rgb(75, 8, 82)"
    }
  }
}));

const SingleProduct = props => {
  // const { dispatch } = useContext(ProductContext);

  const { product, onDelete, history } = props;
  const classes = useStyles();

  /* const handleOnCartClick = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      product: {
        id: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        imageurl: product.imageurl
      }
    });
  };*/
  //const imgname = product.imageurl;
  return (
    <div className="col-md-3">
      <div className="product-top">
        <div className="overlay-left">
          <button
            type="button"
            className="btn"
            title="add to cart"
            /*onClick={() =>
              handleOnCartClick(
                product._id,
                product.name,
                product.description,
                product.price,
                product.imageurl
              )
            }*/
          >
            <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
        <img src={product.imageurl} alt="" />
      </div>
      <div className="product-bottom text-center">
        {
          //<i className="fa fa-star"></i>
          //<i className="fa fa-star"></i>
          //<i className="fa fa-star"></i>
          //<i className="fa fa-star-half-o"></i>
          //<i className="fa fa-star-o"></i>
        }
        <h3>{product.name}</h3>
        <h4>{product.description}</h4>
        <h5>Rs.{product.price}</h5>
        {userService.isAdmin() && (
          <>
            <Fab
              className={classes.fabstyle}
              size="small"
              aria-label="add"
              onClick={e => {
                console.log("navigate to update");
                history.push("/souvenirshop/updateproduct/" + product._id);
              }}
            >
              <EditIcon className="small-icon-color" />
            </Fab>

            <Fab
              className={classes.fabstyle}
              size="small"
              aria-label="delete"
              onClick={e => {
                productService
                  .deleteProduct(product._id)
                  .then(data => {
                    console.log(data);
                    onDelete();
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }}
            >
              <DeleteIcon className="small-icon-color" />
            </Fab>
          </>
        )}
        <hr />
      </div>
    </div>
  );
};

export default withRouter(SingleProduct);
