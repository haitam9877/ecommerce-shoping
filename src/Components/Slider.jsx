import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function CustomSlider() {
  const theme = useTheme();
  const [isLastSlide, setIsLastSlide] = React.useState(false);
  const [isFirstSlide, setIsFirstSlide] = React.useState(true);

  const handleSlideChange = (swiper) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <CardBox
            image="/Prodact/cloth_1.jpg"
            title="Tank Top"
            body="Prodact is Good"
            pris="50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBox
            image="/Prodact/shoe_1.jpg"
            title="Tank Top"
            body="Prodact is Good"
            pris="50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBox
            image="/Prodact/cloth_3.jpg"
            title="Tank Top"
            body="Prodact is Good"
            pris="50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBox
            image="/Prodact/cloth_1.jpg"
            title="Tank Top"
            body="Prodact is Good"
            pris="50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBox
            image="/Prodact/shoe_1.jpg"
            title="Tank Top"
            body="Prodact is Good"
            pris="50"
          />
        </SwiperSlide>
        {/* يمكنك إضافة المزيد من الشرائح هنا */}
      </Swiper>

      <Box
        sx={{
          position: "relative",
          padding: "30px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            marginRight: "20px",
            position: "static",
            color: theme.palette.secondary.dark,

            "&:after": {
              display: "none",
            },
          }}
          className={`swiper-button-prev ${isFirstSlide ? "transparent" : ""}`}
        >
          <ArrowBackIcon color="black" />
        </Box>
        <Box
          sx={{
            position: "static",
            color: theme.palette.secondary.dark,
            "&:after": {
              display: "none",
            },
          }}
          className={`swiper-button-next ${isLastSlide ? "transparent" : ""}`}
        >
          <ArrowForwardIcon color="black" />
        </Box>
      </Box>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const CardBox = ({ image, title, body, pris }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: "100%",
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
