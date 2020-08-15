import React from "react";
import PaymentModal from "./PaymentModal";
import productService from "../../services/ProductsService";
import { withRouter } from "react-router-dom";
import CartProduct from "./CartProduct";

const CartModal = props => {
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
            <CartProduct />
            <div className="content">
              <div className="item">
                <div className="delete text-right">
                  <i className="fa fa-trash"></i>
                </div>

                <div className="image">
                  <img src="https://i.imgur.com/hpG5OTV.png" alt="" />
                </div>

                <div className="description">
                  <span>bbfd</span>
                  <span>dfsdfsfdf</span>
                </div>

                <div className="qty">
                  <div className="plus">
                    <i className="fa fa-plus-circle"></i>
                  </div>
                  <div className="quantity">
                    <input type="text" name="name" value="1" />
                  </div>
                  <div className="minus">
                    <i className="fa fa-minus-circle"></i>
                  </div>
                </div>

                <div className="total-price">Rs. 500</div>
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
