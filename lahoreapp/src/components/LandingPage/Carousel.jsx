import React from "react";
import Lahore1 from "../assets/lahore1.jpg";
import Lahore2 from "../assets/lahore2.jpg";
import Lahore3 from "../assets/lahore3.jpg";
import Lahore4 from "../assets/lahore4.jpg";
import Lahore5 from "../assets/lahore5.jpg";
import Lahore6 from "../assets/lahore6.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block " src={Lahore1} alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h3>LAHORE</h3>
            <p>The city of gardens</p>
            <p>
              <a data-toggle="tooltip" title="Lahore Chouburji" href="#">
                More info
              </a>
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block" src={Lahore2} alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h3>LAHORE</h3>
            <p>The city of gardens</p>
            <p>
              <a data-toggle="tooltip" title="Badshahi Masjid" href="#">
                More info
              </a>
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block " src={Lahore3} alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h3>LAHORE</h3>
            <p>The city of gardens</p>
            <p>
              <a data-toggle="tooltip" title="Azadi Flyover" href="#">
                More info
              </a>
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block" src={Lahore4} alt="Fourth slide" />
          <div className="carousel-caption d-none d-md-block">
            <h3>LAHORE</h3>
            <p>The city of gardens</p>
            <p>
              <a data-toggle="tooltip" title="Bahria Town" href="#">
                More info
              </a>
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block" src={Lahore5} alt="Fifth slide" />
          <div className="carousel-caption d-none d-md-block">
            <h3>LAHORE</h3>
            <p>The city of gardens</p>
            <p>
              <a data-toggle="tooltip" title="Old Lahore" href="#">
                More info
              </a>
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block" src={Lahore6} alt="Sixth slide" />
          <div className="carousel-caption d-none d-md-block">
            <h3>LAHORE</h3>
            <p>The city of gardens</p>
            <p>
              <a data-toggle="tooltip" title="Aerial View of Lahore" href="#">
                More info
              </a>
            </p>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
        data-toggle="tooltip"
        title="Previous Slide"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
        data-toggle="tooltip"
        title="Next Slide"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
