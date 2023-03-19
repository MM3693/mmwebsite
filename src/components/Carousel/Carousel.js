import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="">
            <img
              className="img-fluid"
              src={require("../../assets/img/gallery/Gallery_1.jpg").default}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="img-fluid"
              src={require("../../assets/img/gallery/Gallery_2.jpg").default}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="img-fluid"
              src={require("../../assets/img/gallery/Gallery_3.jpg").default}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="img-fluid"
              src={require("../../assets/img/gallery/Gallery_4.jpg").default}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="img-fluid"
              src={require("../../assets/img/gallery/Gallery_5.jpg").default}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="img-fluid"
              src={require("../../assets/img/gallery/Gallery_6.jpg").default}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="img-fluid"
              src={require("../../assets/img/Gallery_7.jpg").default}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="img-fluid"
              src={require("../../assets/img/gallery/Gallery_8.jpg").default}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="img-fluid"
              src={require("../../assets/img/gallery/Gallery_9.jpg").default}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="img-fluid"
              src={require("../../assets/img/gallery/Gallery_10.jpg").default}
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
