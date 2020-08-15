import React from "react";
import Shopheader from "./ShopHeader/Shopheader";
import Products from "./Products/Products";
import { withRouter } from "react-router";
const SouvenirShop = props => {
  return (
    <div>
      <Shopheader />
      <Products />
    </div>
  );
};

export default withRouter(SouvenirShop);
