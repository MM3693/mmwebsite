import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../assets/img/videoviewimg/1.png";
import img2 from "../../assets/img/videoviewimg/2.png";
import img3 from "../../assets/img/videoviewimg/3.png";
import img4 from "../../assets/img/videoviewimg/4.png";
import img5 from "../../assets/img/videoviewimg/5.png";
import img6 from "../../assets/img/videoviewimg/6.png";
import img7 from "../../assets/img/videoviewimg/7.png";
import img8 from "../../assets/img/videoviewimg/8.png";
import img9 from "../../assets/img/videoviewimg/9.png";
import img10 from "../../assets/img/videoviewimg/10.png";
import img11 from "../../assets/img/videoviewimg/11.png";
import img12 from "../../assets/img/videoviewimg/12.png";
import img13 from "../../assets/img/videoviewimg/13.png";
import img14 from "../../assets/img/videoviewimg/14.png";
import img15 from "../../assets/img/videoviewimg/15.png";

export default class Carousel1 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      speed: 2000,
      autoplaySpeed: 0,
      cssEase: "linear",

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
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="">
            <img className="img-fluid px-1" src={img1} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img2} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img3} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img4} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img5} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img6} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img7} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img8} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img9} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img10} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img11} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img12} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img13} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img14} alt="" />
          </div>
          <div className="">
            <img className="img-fluid px-1" src={img15} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
