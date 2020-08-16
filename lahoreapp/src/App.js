import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";

import Products from "./components/Products/Products";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";
import AboutPage from "./components/AboutPage";
import SouvenirShop from "./components/SouvenirShop";
import NewProduct from "./components/Products/NewProduct";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer/Footer";
import UpdateProduct from "./components/Products/UpdateProduct";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartModal from "./components/ShoppingCart/CartModal";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div id="n1">
      <ToastContainer />
      <TopMenu />
      <Router>
        <Switch>
          <Route path="/contactus" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/souvenirshop/newproduct" component={NewProduct} />
          <Route
            path="/souvenirshop/updateproduct/:id"
            component={UpdateProduct}
          />
          <Route path="/souvenirshop/shoppingcart/:id" component={CartModal} />
          <Route path="/souvenirshop/shoppingcart" component={CartModal} />

          <Route path="/souvenirshop/:page?" exact component={SouvenirShop} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={LandingPage} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
      <div id="gototop">
        <a href="#n1" data-toggle="tooltip" title="Go to Top">
          <i className="fa fa-chevron-circle-up"></i>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
