import React from "react";
import SingleProduct from "./SingleProduct";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import productService from "../../services/ProductsService";
import Shopheader from "../ShopHeader/Shopheader";
import userService from "../../services/UserService";
import Pagination from "@material-ui/lab/Pagination";
import CurrencyDropdown from "../ShopHeader/CurrencyDropdown";

const useStyles = makeStyles(theme => ({
  fabstyle: {
    bottom: theme.spacing(1),
    margin: "auto",
    alignItems: "right",
    justifyContent: "center",
    background: "rgb(75, 8, 82)",
    "&:hover": {
      background: "rgba(75, 8, 82,0.8)"
    }
  }
}));

const Products = props => {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();
  const page = props.match.params.page ? props.match.params.page : 1;
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(12);

  const getData = () => {
    productService
      .getProducts(page, perPage)
      .then(data => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch(err => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, [page, perPage]);
  // console.log("Inside Products Component");
  const handleNewProductClick = () => {
    console.log(props);
    props.history.push("/souvenirshop/newproduct");
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={9}></Grid>
        <Grid item xs={3}>
          <div id="select">
            <span>Items per page:</span>{" "}
            <select
              className="btn"
              value={perPage}
              onChange={e => {
                setPerPage(e.target.value);
              }}
            >
              <option value="12">Default</option>
              <option value="4">Four</option>
              <option value="8">Eight</option>
              <option value="12">Twelve</option>
              <option value="16">Sixteen</option>
              <option value="20">Twenty</option>
            </select>{" "}
          </div>
        </Grid>
      </Grid>
      {products.length == 0 ? (
        <div className="container">
          <p>
            There are currently no products in the shop. Kindly check back
            later! :){" "}
          </p>
          {userService.isLoggedIn() && userService.isAdmin() && (
            <Fab
              className={classes.fabstyle}
              aria-label="add"
              onClick={handleNewProductClick}
            >
              <AddIcon className="icon-color" />
            </Fab>
          )}
        </div>
      ) : (
        <div>
          <main className="on-sale">
            <div className="container">
              <div className="row">
                {products.map((product, index) => (
                  <SingleProduct
                    key={index}
                    product={product}
                    onDelete={getData}
                  />
                ))}
                {userService.isLoggedIn() && userService.isAdmin() && (
                  <Fab
                    className={classes.fabstyle}
                    aria-label="add"
                    onClick={handleNewProductClick}
                  >
                    <AddIcon className="icon-color" />
                  </Fab>
                )}
              </div>
            </div>
          </main>
        </div>
      )}
      <Grid container spacing={3}>
        <Grid item xs={9}></Grid>
        <Grid item xs={3}>
          <Pagination
            count={Math.ceil(total / perPage)}
            variant="outlined"
            size="medium"
            onChange={(e, value) => {
              console.log(props);
              props.history.push("/souvenirshop/" + value);
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Products);
