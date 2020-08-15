import React from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import FilterDropdown from "./FilterDropdown";
import Cart from "./Cart";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import CartModal from "../ShoppingCart/CartModal";
const Shopheader = props => {
  const handleLoginClick = () => {
    console.log(props);
    props.history.push("/login");
  };
  const handleRegisterClick = () => {
    console.log(props);
    props.history.push("/register");
  };

  return (
    <header>
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="my-md-2 site-title">SOUVENIR SHOP</h2>
            {!userService.isLoggedIn() ? (
              <>
                <button
                  class="btn my-2"
                  data-toggle="tooltip"
                  title="Create an Account"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
                <button
                  class="btn my-2"
                  data-toggle="tooltip"
                  title="Login"
                  onClick={handleRegisterClick}
                >
                  Register
                </button>
              </>
            ) : (
              <button
                class="btn my-2"
                data-toggle="tooltip"
                title="Logout"
                onClick={e => {
                  userService.logout();
                  window.location.reload();
                }}
              >
                Logout {userService.getLoggedInUser().name}
              </button>
            )}
          </div>
          <div id="btn" class="col-12">
            <CurrencyDropdown />
            <FilterDropdown />
            <CartModal />
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Shopheader);
