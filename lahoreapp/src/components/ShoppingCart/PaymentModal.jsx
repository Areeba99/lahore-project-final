import React from "react";
const PaymentModal = props => {
  return (
    <>
      <button
        type="button"
        className="btn"
        data-toggle="modal"
        data-target="#mymodal2"
      >
        Proceed to Payment
      </button>
      <div className="modal fade" id="mymodal2">
        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
          <div className="modal-content bill">
            <div className="title modal-title">
              Billing Form
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                60%
              </div>
            </div>
            <div className="row content">
              <div className="col-75">
                <div className="container">
                  <form>
                    <div className="row">
                      <div className="col-50">
                        <h3>Billing Address</h3>
                        <label for="fname">
                          <i className="fa fa-user"></i> Full Name
                        </label>
                        <input
                          type="text"
                          id="fname"
                          name="firstname"
                          placeholder="John M. Doe"
                        />
                        <label for="email">
                          <i className="fa fa-envelope"></i> Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                        />
                        <label for="adr">
                          <i className="fa fa-address-card-o"></i> Address
                        </label>
                        <input
                          type="text"
                          id="adr"
                          name="address"
                          placeholder="542 W. 15th Street"
                        />
                        <label for="city">
                          <i className="fa fa-institution"></i> City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          placeholder="New York"
                        />

                        <div className="row">
                          <div className="col-50">
                            <label for="state">State</label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              placeholder="NY"
                            />
                          </div>
                          <div className="col-50">
                            <label for="zip">Zip</label>
                            <input
                              type="text"
                              id="zip"
                              name="zip"
                              placeholder="10001"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-50">
                        <h3>Payment</h3>
                        <label for="fname">Accepted Cards</label>
                        <div className="icon-container">
                          <i className="fa fa-cc-visa"></i>
                          <i className="fa fa-cc-amex"></i>
                          <i className="fa fa-cc-mastercard"></i>
                          <i className="fa fa-cc-discover"></i>
                        </div>
                        <label for="cname">Name on Card</label>
                        <input
                          type="text"
                          id="cname"
                          name="cardname"
                          placeholder="John More Doe"
                        />
                        <label for="ccnum">Credit card number</label>
                        <input
                          type="text"
                          id="ccnum"
                          name="cardnumber"
                          placeholder="1111-2222-3333-4444"
                        />
                        <label for="expmonth">Exp Month</label>
                        <input
                          type="text"
                          id="expmonth"
                          name="expmonth"
                          placeholder="September"
                        />

                        <div className="row">
                          <div className="col-50">
                            <label for="expyear">Exp Year</label>
                            <input
                              type="text"
                              id="expyear"
                              name="expyear"
                              placeholder="2018"
                            />
                          </div>
                          <div className="col-50">
                            <label for="cvv">CVV</label>
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              placeholder="352"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <label>
                      <input type="checkbox" checked="checked" name="sameadr" />
                      Shipping address same as billing
                    </label>
                    <input
                      type="submit"
                      value="Continue to checkout"
                      className="btn"
                    />
                  </form>
                </div>
              </div>

              <div className="col-25">
                <div className="container">
                  <h4>
                    Cart
                    <span className="price">
                      <i className="fa fa-shopping-cart"></i>
                      <b>4</b>
                    </span>
                  </h4>
                  <p>
                    <a href="#">Antique Earrings</a>
                    <span className="price">PKR.200</span>
                  </p>
                  <p>
                    <a href="#">Onyx Bracelet</a>
                    <span className="price">PKR.1200</span>
                  </p>
                  <p>
                    <a href="#">Pashmina Shawl</a>
                    <span className="price">PKR.1000</span>
                  </p>
                  <p>
                    <a href="#">Khussa</a>{" "}
                    <span className="price">PKR.450</span>
                  </p>
                  <hr />
                  <p>
                    Total
                    <span className="price">
                      <b>PKR.2850</b>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;
