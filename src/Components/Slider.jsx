import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../App.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";

const CustomNextArrow = ({ onClick, isDisabled }) => {
  return (
    <div
      className={`custom-arrow custom-next ${isDisabled ? "disabled" : ""}`}
      onClick={onClick}
      style={{
        pointerEvents: isDisabled ? "none" : "auto",
        opacity: isDisabled ? 0.5 : 1,
      }}
    >
      <ArrowForwardIcon />
    </div>
  );
};

const CustomPrevArrow = ({ onClick, isDisabled }) => {
  return (
    <div
      className={`custom-arrow custom-prev ${isDisabled ? "disabled" : ""}`}
      onClick={onClick}
      style={{
        pointerEvents: isDisabled ? "none" : "auto",
        opacity: isDisabled ? 0.5 : 1,
      }}
    >
      <ArrowBackIcon />
    </div>
  );
};

export default function CustomSlider() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    afterChange: (current) => {
      setCurrentSlide(current);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  useEffect(() => {
    const updateTotalSlides = () => {
      const total = Math.ceil(
        sliderRef.current.props.children.length / settings.slidesToShow
      );
      setTotalSlides(total);
    };

    updateTotalSlides();

    window.addEventListener("resize", updateTotalSlides);
    return () => window.removeEventListener("resize", updateTotalSlides);
  }, [settings.slidesToShow]);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        <CardBox
          image="/Prodact/cloth_1.jpg"
          title="Tank Top"
          body="Prodact is Good"
          pris="50"
        />
        <CardBox
          image="/Prodact/shoe_1.jpg"
          title="Tank Top"
          body="Prodact is Good"
          pris="50"
        />
        <CardBox
          image="/Prodact/cloth_3.jpg"
          title="Tank Top"
          body="Prodact is Good"
          pris="50"
        />
        <CardBox
          image="/Prodact/cloth_1.jpg"
          title="Tank Top"
          body="Prodact is Good"
          pris="50"
        />
        <CardBox
          image="/Prodact/shoe_1.jpg"
          title="Tank Top"
          body="Prodact is Good"
          pris="50"
        />
      </Slider>
      <div className="arrows-container">
        <CustomPrevArrow onClick={handlePrev} isDisabled={currentSlide === 0} />
        <CustomNextArrow
          onClick={handleNext}
          isDisabled={currentSlide >= totalSlides - 1}
        />
      </div>
    </div>
  );
}

const CardBox = ({ image, title, body, pris }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: 360,
        paddingBottom: "50px",
        boxShadow: theme.shadows[1],
      }}
    >
      <CardMedia sx={{ height: 240 }} image={image} title="green iguana" />
      <CardContent
        sx={{
          textAlign: "center",
          color: theme.palette.primary.main,
          padding: "30px 0",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color={theme.palette.secondary.main}>
          {body}
        </Typography>
        <Typography variant="body2">${pris}</Typography>
      </CardContent>
    </Card>
  );
};
