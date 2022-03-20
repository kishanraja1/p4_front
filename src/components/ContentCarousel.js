import React, {Component} from 'react';
import {useState, useEffect} from 'react'
import Slider from "react-slick";

// MUI
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const ContentCarousel = (props) => {

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
  const [contentIndex, setContentIndex] = useState(0)
  const [album, setAlbum] = useState(emptyAlbum)
  let emptyAlbum = {name: '', year: 0, image: '', }

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
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

    return (
      <>
      <div className="contentCarousel">
        <Slider {...settings}>
          {albumsArray.map((img, id) => (
            <div className={id === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
        <Typography item variant="h3" align= 'center'>
          <Box sx={{m: 1, p: 1}} >Albums</Box>
        </Typography>
      </div>
      </>
      );
    }

export default ContentCarousel;

// Saving for when we have spotify data for artists
// <div className="landingCarousel">
//   <Slider {...settings}>
//     {artistsArray.map((img, id) => (
//       <div className={id === imageIndex ? "slide activeSlide" : "slide"}>
//         <img src={img} alt={img} />
//       </div>
//     ))}
//   </Slider>
//   <Typography item variant="h3" align= 'center'>
//     <Box sx={{m: 1, p: 1}} >Artists</Box>
//   </Typography>
// </div>
