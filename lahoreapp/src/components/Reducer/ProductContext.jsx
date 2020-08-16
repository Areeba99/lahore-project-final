import React, { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

export const ProductContext = createContext();

const ProductContextProvider = props => {
  const [products, dispatch] = useReducer(cartReducer, []);
  return (
    <ProductContextProvider value={{ products, dispatch }}>
      {props.children}
    </ProductContextProvider>
  );
};

export default ProductContextProvider;
