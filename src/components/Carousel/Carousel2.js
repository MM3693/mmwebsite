import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../assets/img/cauro/1.png";
import img2 from "../../assets/img/cauro/2.png";
import img3 from "../../assets/img/cauro/3.png";
import img4 from "../../assets/img/cauro/4.png";
import img5 from "../../assets/img/cauro/5.png";
import img6 from "../../assets/img/cauro/6.png";
import img7 from "../../assets/img/cauro/7.png";
import img8 from "../../assets/img/cauro/8.png";
import img9 from "../../assets/img/cauro/9.png";
import img10 from "../../assets/img/cauro/10.png";
import img11 from "../../assets/img/cauro/11.png";
import img12 from "../../assets/img/cauro/12.png";
import img13 from "../../assets/img/cauro/13.png";
import img14 from "../../assets/img/cauro/14.png";
import img15 from "../../assets/img/cauro/15.png";
import img16 from "../../assets/img/cauro/16.png";
import img17 from "../../assets/img/cauro/17.png";
import img18 from "../../assets/img/cauro/18.png";
import img19 from "../../assets/img/cauro/19.png";
import img20 from "../../assets/img/cauro/20.png";

export default class Carousel2 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      speed: 3000,
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
        </Slider>

        <Slider {...settings}>
          <div className="">
            <img className="img-fluid" src={img11} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img12} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img13} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img14} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img15} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img16} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img17} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img18} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img19} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={img20} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
