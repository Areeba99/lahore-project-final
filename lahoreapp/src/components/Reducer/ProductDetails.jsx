const { useContext } = require("react");
const { ProductContext } = require("./ProductContext");

import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
const ProductDetails = ({ product }) => {
  const { dispatch } = useContext(ProductContext);
  return (
    <li onClick={() => dispatch({})}>
      <div>{product.name}</div>
      <div>{product.description}</div>
    </li>
  );
};
export default ProductDetails;
