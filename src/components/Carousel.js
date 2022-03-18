import React, {Component} from 'react';
import {useState, useEffect} from 'react'
import Slider from "react-slick";

// MUI
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//STOCK IMAGES
import big from "./carouImgs/BIG.jpg"
import blink from "./carouImgs/blink.jpg"
import boss from "./carouImgs/boss.jpg"
import bowie from "./carouImgs/bowie.jpg"
import cardi from "./carouImgs/cardi.jpeg"
import cash from "./carouImgs/cash.jpg"
import clash from "./carouImgs/clash.jpg"
import drake from "./carouImgs/drake.jpg"
import duran from "./carouImgs/duran.jpg"
import fleetwood from "./carouImgs/fleetwood.jpg"
import floyd from "./carouImgs/floyd.jpg"
import gaga from "./carouImgs/gaga.jpg"
import joydivision from "./carouImgs/joydivision.jpg"
import judas from "./carouImgs/judas.jpg"
import kendrick from "./carouImgs/kendrick.jpg"
import lizzo from "./carouImgs/lizzo.jpeg"
import metallica from "./carouImgs/metallica.jpg"

/// IMG ARRAY FOR MAPPING
const imagesArray = [big, blink, boss, bowie, cardi, cash, clash,
  drake,
  duran,
  fleetwood,
  floyd,
  gaga,
  joydivision,
  judas,
  kendrick,
  lizzo,
  metallica,
]

const Carousel = (props) => {

//ARROW FUNCTIONS
  // const NextArrow = ({onClick}) => {
  //   return(
  //     <div className="arrow next" onClick={onClick}>
  //       <NavigateNextIcon />
  //     </div>
  //   )
  // }
  // const PrevArrow = ({onClick}) => {
  //   return(
  //     <div className="arrow prev" onClick={onClick}>
  //       <ArrowBackIosIcon />
  //     </div>
  //   )
  // }

//STATE
  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    centerMode: true,
    centerPadding: 1,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next)
  };

    return (
        <div className="landingCarousel">
          <Slider {...settings}>
            {imagesArray.map((img, id) => (
              <div className={id === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
      );
    }

export default Carousel;
