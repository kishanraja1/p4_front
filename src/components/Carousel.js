import React, {Component} from 'react';
import {useState, useEffect} from 'react'
import Slider from "react-slick";

// MUI
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//STOCK IMAGES
  //Albums
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
import miles from "./carouImgs/miles.jpg"
import msjackson from "./carouImgs/msjackson.jpg"
import nas from "./carouImgs/nas.jpg"
import nodoubt from "./carouImgs/nodoubt.jpg"
import parlamient from "./carouImgs/parlamient.jpg"
import sgtpepp from "./carouImgs/sgtpepp.jpg"
import tswift from "./carouImgs/tswift.jpg"
import ye from "./carouImgs/ye.jpg"

/// IMG ARRAY FOR MAPPING
const albumsArray = [big, blink, boss, bowie, cardi, cash, clash, drake,
  duran, fleetwood, floyd, gaga, joydivision, judas, kendrick, lizzo,
  metallica, miles, msjackson, nas, nodoubt, parlamient, sgtpepp, tswift, ye,]

const Carousel = (props) => {

//STATE
  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    centerMode: true,
    centerPadding: 1,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 250,
    autoplaySpeed: 900,
    cssEase: "linear",
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true

          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true

          }
        }
      ]
  };

    return (
      <>
      <div className="landingCarousel">
        <Slider {...settings}>
          {albumsArray.map((img, id) => (
            <div className={id === imageIndex ? "slide activeSlide" : "slide"}  key={[0]}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
      </>
      );
    }

export default Carousel;
