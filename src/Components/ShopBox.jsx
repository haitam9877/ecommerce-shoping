import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Fade,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
  Slider,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { blue, blueGrey, green, grey, purple, red } from "@mui/material/colors";
import { useEffect, useRef, useState } from "react";
import { useStyled } from "../Contexts/StyledContext";
import { ArrowBack, ArrowDropDown } from "@mui/icons-material";
const ContBox = styled(Box)(({ theme }) => ({
  border: "1px solid " + theme.palette.secondary.light,
  padding: "30px",
  lineHeight: "2em",
  marginBottom: "20px",
}));

const CustomSlider = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-root": {
    color: "red", // تغيير لون الشريط الرئيسي
  },
  "&  .MuiSlider-rail": {
    background: "none",
    padding: "3px 0",
    border: "2px solid " + theme.palette.primary.main,
  },
  "&  .MuiSlider-thumb": {
    width: 15,
    height: 15,
    background: theme.palette.primary.main,
    "&:hover": {
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
  "& .css-ttgsjq-MuiSlider-track": {
    height: 7,
    background: theme.palette.primary.main,
  },
  "& .MuiSlider-valueLabelOpen": {
    display: "none",
  },
}));

// تحويل القيم من النسبة المئوية إلى الدولار
const percentageToDollar = (value) => {
  const minDollar = 0;
  const maxDollar = 500;
  return minDollar + ((maxDollar - minDollar) / 100) * value;
};

// تحويل القيم من الدولار إلى النسبة المئوية
const dollarToPercentage = (value) => {
  const minDollar = 0;
  const maxDollar = 500;
  return ((value - minDollar) / (maxDollar - minDollar)) * 100;
};

export default function ShopBox() {
  const theme = useTheme();
  const { Item } = useStyled();
  const [value, setValue] = useState([
    dollarToPercentage(0),
    dollarToPercentage(300),
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box marginTop={10}>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid container spacing={2}>
          <Grid md={3} sm={4} xs={12}>
            <ContBox>
              <Cataloge
                nameCataloge="CATEGORIES"
                style={{
                  "& > *": {
                    justifyContent: "space-between",
                    textTransform: "capitalize",
                  },
                  "& > * > :nth-of-type(1) ": {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <CatalogeOption>
                  <div>man</div>
                  <div>(2.951)</div>
                </CatalogeOption>
                <CatalogeOption>
                  <div>Women</div>
                  <div>(2.520)</div>
                </CatalogeOption>
                <CatalogeOption>
                  <div>Children</div>
                  <div>(2.122)</div>
                </CatalogeOption>
              </Cataloge>
            </ContBox>

            <ContBox>
              <Cataloge nameCataloge="FILTER BY PRICE">
                <Box sx={{ width: "100%" }}>
                  <CustomSlider
                    value={value}
                    min={0}
                    step={20}
                    onChange={handleChange}
                  />
                  <Typography variant="body1">
                    {`$${percentageToDollar(value[0]).toFixed(
                      0
                    )} - $${percentageToDollar(value[1]).toFixed(0)}`}
                  </Typography>
                </Box>
              </Cataloge>
              <Cataloge nameCataloge="SIZE">
                <CatalogeOption>
                  <FormGroup
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 16,
                      },
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Small (2,319)"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Medium (1,282)"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Large (1,392)"
                    />
                  </FormGroup>
                </CatalogeOption>
              </Cataloge>
              <Cataloge nameCataloge="COLOR">
                <CatalogeOption>
                  <CustomColor color={red[700]} />
                  <Typography variant="body1">Red (22.22)</Typography>
                </CatalogeOption>
                <CatalogeOption>
                  <CustomColor color={green[700]} />
                  <Typography variant="body1">Green (22.22)</Typography>
                </CatalogeOption>
                <CatalogeOption>
                  <CustomColor color={blue[700]} />
                  <Typography variant="body1">Blue (22.22)</Typography>
                </CatalogeOption>
                <CatalogeOption>
                  <CustomColor color={purple[700]} />
                  <Typography variant="body1">Purple (22.22)</Typography>
                </CatalogeOption>
              </Cataloge>
            </ContBox>
          </Grid>
          <Grid md={9} sm={8} xs={12}>
            <Container maxWidth="lg">
              <Box sx={{ display: "flex" }}>
                <Box flexGrow={1}>
                  <Typography
                    variant="body1"
                    color={theme.palette.secondary.dark}
                    fontSize={18}
                  >
                    Shop All
                  </Typography>
                </Box>

                <Box sx={{ display: "flex" }}>
                  <CustomBttoun name="LASTER" menuItem={["haitam"]} />
                  <CustomBttoun name="Reference" menuItem={["boubaou"]} />
                </Box>
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <Grid container spacing={3}>
                  <CardBox
                    image="https://themewagon.github.io/shoppers/images/cloth_1.jpg"
                    title="Tank Top"
                    body="Prodact is Good"
                    pris="50"
                  />
                  <CardBox
                    image="https://themewagon.github.io/shoppers/images/cloth_2.jpg"
                    title="Tank Top"
                    body="Prodact is Good"
                    pris="50"
                  />
                  <CardBox
                    image="https://themewagon.github.io/shoppers/images/cloth_3.jpg"
                    title="Tank Top"
                    body="Prodact is Good"
                    pris="50"
                  />
                  <CardBox
                    image="https://themewagon.github.io/shoppers/images/cloth_1.jpg"
                    title="Tank Top"
                    body="Prodact is Good"
                    pris="50"
                  />
                  <CardBox
                    image="https://themewagon.github.io/shoppers/images/cloth_3.jpg"
                    title="Tank Top"
                    body="Prodact is Good"
                    pris="50"
                  />
                  <CardBox
                    image="https://themewagon.github.io/shoppers/images/cloth_1.jpg"
                    title="Tank Top"
                    body="Prodact is Good"
                    pris="50"
                  />
                  <CardBox
                    image="https://themewagon.github.io/shoppers/images/cloth_1.jpg"
                    title="Tank Top"
                    body="Prodact is Good"
                    pris="50"
                  />
                  <CardBox
                    image="https://themewagon.github.io/shoppers/images/cloth_3.jpg"
                    title="Tank Top"
                    body="Prodact is Good"
                    pris="50"
                  />
                  <CardBox
                    image="https://themewagon.github.io/shoppers/images/cloth_1.jpg"
                    title="Tank Top"
                    body="Prodact is Good"
                    pris="50"
                  />
                </Grid>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// eslint-disable-next-line react/prop-types
const Cataloge = ({ children, nameCataloge, style }) => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="body1" color={theme.palette.secondary.dark}>
        {nameCataloge}
      </Typography>

      <Box sx={style}>{children}</Box>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const CatalogeOption = ({ children, style }) => {
  return <Box sx={(style, { display: "flex" })}>{children}</Box>;
};

const CustomColor = styled(Box)(({ color }) => ({
  alignSelf: "center",
  width: "14px",
  height: "14px",
  backgroundColor: color,
  borderRadius: "50%",
  marginRight: "10px",
}));

const CustomBttoun = ({ name, menuItem }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuWidth, setMenuWidth] = useState(null);
  const buttonRef = useRef(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { ButtonStyled } = useStyled();
  const theme = useTheme();

  useEffect(() => {
    if (buttonRef.current) {
      setMenuWidth(buttonRef.current.offsetWidth);
    }
  }, [anchorEl]);

  return (
    <div style={{ marginLeft: "8px" }}>
      <ButtonStyled
        ref={buttonRef}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          margin: 0,
          background: blueGrey[100],
          color: "black",

          letterSpacing: 0,

          "&:hover": {
            background: blueGrey[100],
          },
        }}
      >
        {name}
        <ArrowDropDown />
      </ButtonStyled>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: menuWidth,
          },
        }}
      >
        {menuItem.map((item) => (
          <MenuItem key={item} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const CardBox = ({ image, title, body, pris }) => {
  const theme = useTheme();
  return (
    <Grid md={4} sm={6} xs={12}>
      <Card
        sx={{
          boxShadow: theme.shadows[1],
        }}
      >
        <CardMedia component="img" src={image} title="green iguana" />

        <CardContent
          sx={{
            textAlign: "center",
            color: theme.palette.primary.main,
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
    </Grid>
  );
};
