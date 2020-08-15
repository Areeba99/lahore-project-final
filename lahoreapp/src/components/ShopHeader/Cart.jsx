import React, { useState } from "react";
/*import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress
} from "reactstrap";*/
import CartModal from "../ShoppingCart/CartModal";
const Cart = props => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    /*<div id="cart" className="btn-group">
      <div className="wrapper">
        <i className="fa fa-shopping-cart"></i>
        <span>0</span>
      </div>
      <button
        className="btn my-2"
        data-toggle="modal"
        data-target="#mymodal"
        data-toggle="tooltip"
        title="View your cart"
        onClick={toggle}
      >
        View Cart
      </button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="shopping-cart"
        //className={className}
        id="mymodal"
      >
        <ModalHeader toggle={toggle}>
          Shopping Cart
          <div
          //className="progress"
          >
            <div className="text-center">30%</div>
            <Progress multi className="progress-bar">
              <Progress bar color="rgb(75, 8, 82)" value="30" />
              <Progress bar color="rgba(120, 255, 58, 1)" value="70" />
            </Progress>
          </div>
        </ModalHeader>

        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#mymodal2"
            onClick={toggle}
          >
            Proceed to Payment
          </button>
        </ModalFooter>
      </Modal>
    </div>*/
    <div></div>
  );
};

export default Cart;
