import React from "react";
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: action.cart.id,
          name: action.cart.title,
          description: action.cart.description,
          price: action.cart.price,
          imageurl: action.cart.imageurl
        }
      ];
    case "DELETE_ITEM":
      return state.filter(cart => cart.id !== action.id);

    default:
      return state;
  }
};
