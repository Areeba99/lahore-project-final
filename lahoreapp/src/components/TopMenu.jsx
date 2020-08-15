import React from "react";
//sfc = status functional components
const TopMenu = () => {
  const handleActiveTab = event => {
    document.getElementsByClassName("nav-item").color = "white";
    const target = event.target || event.srcElement;
    document.getElementById(target.id).style.color = "rgba(120, 255, 58, 1)";
  };
  return (
    <nav id="n1" className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          LAHORE
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fa fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" id="about">
              <a
                className="nav-link"
                href="/"
                data-toggle="tooltip"
                title="Home page"
                // onClick={handleActiveTab}
              >
                Home
              </a>
            </li>

            <li className="nav-item dropdown" id="about">
              <a
                className="nav-link"
                aria-haspopup="true"
                aria-expanded="false"
                data-toggle="dropdown"
                href="/about"
              >
                About
              </a>
              <div className="dropdown-menu" aria-labelledby="about">
                <a
                  className="dropdown-item"
                  href="/about"
                  data-toggle="tooltip"
                  title="About us"
                >
                  About the site
                </a>
                <a
                  className="dropdown-item"
                  href="/"
                  data-toggle="tooltip"
                  title="View history"
                >
                  History of Lahore
                </a>
                <a
                  className="dropdown-item"
                  href="/"
                  data-toggle="tooltip"
                  title="Then and now"
                >
                  Lahore Then and Now
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                data-toggle="tooltip"
                title="Best Sightseeing spots"
                // onClick={handleActiveTab}
              >
                Sightseeing
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                data-toggle="tooltip"
                title="Picture gallery"
                // onClick={handleActiveTab}
              >
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/souvenirshop"
                data-toggle="tooltip"
                title="Buy Souvenirs"
                // onClick={handleActiveTab}
              >
                Souvenir Shop
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/contactus"
                data-toggle="tooltip"
                title="Contact us"
                //  onClick={handleActiveTab}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
