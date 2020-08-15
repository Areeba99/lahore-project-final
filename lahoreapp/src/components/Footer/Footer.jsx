import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5>Find more about Lahore</h5>
            <p>
              Want to contact or support us? <br />
              <a
                href="/html/index.html"
                data-toggle="tooltip"
                title="Home page"
              >
                Home
              </a>
              <br />
              <a href="" data-toggle="tooltip" title="Contact us">
                Contact
              </a>
              <br />
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <ul className="list-unstyled">
              <li>
                <a href="#" data-toggle="tooltip" title="About Lahore">
                  About
                </a>
              </li>
              <li>
                <a href="#" data-toggle="tooltip" title="Sightseeing spots">
                  Sightseeing
                </a>
              </li>
              <li>
                <a href="#" data-toggle="tooltip" title="Gallery">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
