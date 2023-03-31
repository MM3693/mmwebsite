import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../assets/img/cauro/1.jpeg";
import img2 from "../../assets/img/cauro/2.jpeg";
import img3 from "../../assets/img/cauro/3.jpeg";
import img4 from "../../assets/img/cauro/4.jpeg";
import img5 from "../../assets/img/cauro/5.jpeg";
import img6 from "../../assets/img/cauro/6.jpeg";
import img7 from "../../assets/img/cauro/7.jpeg";
import img8 from "../../assets/img/cauro/8.jpeg";
import img9 from "../../assets/img/cauro/9.jpeg";
import img10 from "../../assets/img/cauro/10.jpeg";

export default class Carousel2 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
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
        <Slider className="" {...settings}>
          <div className="">
            <img className="img-fluid" src={img1} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img2} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img3} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img4} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img5} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img3} alt="" />
          </div>
        </Slider>

        <Slider {...settings}>
          <div className="">
            <img className="img-fluid" src={img6} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img7} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img8} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img9} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img10} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img1} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img7} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img8} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img9} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img10} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
