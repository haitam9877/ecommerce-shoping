import Container from "@mui/material/Container";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import { Typography, Box, styled, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import Drawere from "./Drawar";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function Navbar() {
  const [showDrawar, setShowDrawar] = useState(false);

  const IconPersonIcon = styled(Link)(({ theme }) => ({
    transition: ".3s all",
    color: theme.palette.secondary.main,
    padding: "0 5px",
    display: "inline-flex",

    "&:hover": {
      color: theme.palette.secondary.dark,
    },
  }));

  // const handlshowDrawar = () => {
  //   setShowDrawar(true);
  // };

  // تحديد أسلوب CSS المخصص

  return (
    <>
      <Container
        component="nav"
        sx={{ maxWidth: "lg", marginTop: 4, marginBottom: 4 }}
      >
        <Grid container alignItems="center">
          <Grid md={4} xs={6} sx={{ order: { md: 1, xs: 2 } }}>
            <Box
              className="seach"
              sx={{
                display: "flex",
              }}
            >
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid
            textAlign="center"
            md={4}
            xs={12}
            sx={{ order: { md: 2, xs: 1 }, marginBottom: { xs: 4, md: 0 } }}
          >
            <Logo />
          </Grid>
          <Grid textAlign="end" md={4} xs={6} sx={{ order: { xs: 3 } }}>
            <IconPersonIcon to="/about">
              <PersonIcon />
            </IconPersonIcon>

            <IconPersonIcon to="/about">
              <FavoriteBorderIcon />
            </IconPersonIcon>

            <IconPersonIcon>
              <Badge color="primary" badgeContent={0} showZero>
                <ShoppingCartIcon />
              </Badge>
            </IconPersonIcon>

            <IconPersonIcon
              sx={{
                display: { xs: "inline-flex", md: "none" },
                marginLeft: "20px",
              }}
            >
              <MenuIcon
                onClick={() => {
                  setShowDrawar(true);
                }}
              />
            </IconPersonIcon>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ margin: "20px 0", display: { xs: "none" } }} />
      <Drawere setShowDrawar={setShowDrawar} showDrawar={showDrawar} />
    </>
  );
}

// eslint-disable-next-line react/prop-types
export const Logo = ({ styleds }) => {
  const theme = useTheme();

  return (
    <Box className="logo" sx={styleds}>
      <Link to="/" style={{ margin: "0 auto" }}>
        <Typography
          variant="button"
          letterSpacing={4}
          sx={{ color: theme.palette.secondary.dark }}
          // eslint-disable-next-line no-undef
        >
          logo
        </Typography>
      </Link>
    </Box>
  );
};
