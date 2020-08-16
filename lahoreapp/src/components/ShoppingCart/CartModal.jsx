import React from "react";
import PaymentModal from "./PaymentModal";
import productService from "../../services/ProductsService";
import { withRouter } from "react-router-dom";
import CartProduct from "./CartProduct";
import userService from "../../services/UserService";

const CartModal = props => {
  //const localData = localStorage.getItem("product");
  const handlePlus = () => {
    var qty = document.getElementById("qty").value;
    qty = parseInt(qty);
    qty = qty + 1;
    document.getElementById("qty").value = qty;
    var price = document.getElementById("price").value;
    price = parseInt(price);
    price = price + 500;
    document.getElementById("price").value = price;
  };
  const handleMinus = () => {
    var qty = document.getElementById("qty").value;
    qty = parseInt(qty);
    qty = qty - 1;
    document.getElementById("qty").value = qty;
    var price = document.getElementById("price").value;
    price = parseInt(price);
    price = price - 500;
    document.getElementById("price").value = price;
  };
  // return localData ? JSON.parse(localData) : [];
  /*const [value, setValue] = React.useState(
    localStorage.getItem("myValueInLocalStorage") || ""
  );
  React.useEffect(() => {
    localStorage.setItem("productName", value);
  }, [value]);*/
  // const { product, history } = props;
  // console.log(product.name);
  /*const [name, setName] = React.useState("");
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
  }, []);*/
  return (
    <>
      {" "}
      {userService.isLoggedIn() ? (
        <>
          <div id="cart" className="btn-group">
            <div className="wrapper">
              <i className="fa fa-shopping-cart"></i>
              <span>0</span>
            </div>
            <button
              type="button"
              className="btn my-2"
              data-toggle="modal"
              data-target="#mymodal"
              title="View your cart"
              onClick={() => {
                console.log("in modal prod");
              }}
            >
              VIEW CART
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="modal fade" id="mymodal">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable ">
          <div className="modal-content shopping-cart">
            <div className="title modal-title">
              Shopping Cart
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                30%
              </div>
            </div>

            <div className="content">
              <div className="item">
                <div className="delete text-right">
                  <i className="fa fa-trash"></i>
                </div>

                <div className="image">
                  <img src="https://i.imgur.com/hpG5OTV.png" alt="" />
                </div>

                <div className="description">
                  <span>Earrings</span>
                  <span>White and Golden</span>
                </div>

                <div className="qty">
                  <div className="plus">
                    <i className="fa fa-plus-circle" onClick={handlePlus}></i>
                  </div>
                  <div className="quantity">
                    <input id="qty" type="text" name="name" value="1" />
                  </div>
                  <div className="minus">
                    <i className="fa fa-minus-circle" onClick={handleMinus}></i>
                  </div>
                </div>
                <div className="total-price">
                  <input
                    id="price"
                    type="text"
                    className="quantity"
                    value="500"
                  ></input>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <PaymentModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(CartModal);
