import Container from "@mui/material/Container";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import { Typography, Box, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import Drawere from "./Drawar";

export default function Navbar() {
  const theme = useTheme();

  const [showDrawar, setShowDrawar] = useState(false);

  const IconPersonIcon = styled(Link)(({ theme }) => ({
    transition: ".3s all",
    color: theme.palette.secondary.main,
    padding: "0 5px",

    "&:hover": {
      color: theme.palette.secondary.dark,
    },
  }));

  // const handlshowDrawar = () => {
  //   setShowDrawar(true);
  // };

  // تحديد أسلوب CSS المخصص

  return (
    <Box
      component="nav"
      sx={{ padding: { md: "40px 10px 0 10px", xs: "10px 10px" } }}
    >
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            alignItems: "center",
          }}
        >
          <Box
            className="seach"
            sx={{
              display: "flex",
              flex: { xs: "0 1 50%", md: "0 1 50%" },
              order: { xs: 2, md: 1 },
            }}
          >
            <SearchIcon />
            <input type="text" placeholder="Search" style={{ width: "100%" }} />
          </Box>

          <Logo
            styleds={{
              display: "flex",
              flex: { xs: "1 0 100%", md: "0 1 50%" },
              order: { xs: 1, md: 2 },
              marginBottom: { xs: 3 },
            }}
          />

          <Box
            className="add"
            sx={{
              display: "flex",
              flex: { xs: "0 1 50%", md: "0 1 50%" },
              justifyContent: "end",
              order: { xs: 3, md: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: theme.palette.primary.mainIcone,
              }}
            >
              <IconPersonIcon to="/about">
                <PersonIcon />
              </IconPersonIcon>

              <IconPersonIcon to="/about">
                <FavoriteBorderIcon />
              </IconPersonIcon>
              <IconPersonIcon to="/about">
                <ShoppingCartIcon />
              </IconPersonIcon>
              <IconPersonIcon
                sx={{
                  display: { xs: "block", md: "none" },
                  marginLeft: "20px",
                }}
              >
                <MenuIcon
                  onClick={() => {
                    setShowDrawar(true);
                  }}
                />
              </IconPersonIcon>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider sx={{ margin: "20px 0", display: { xs: "none" } }} />
      <Drawere setShowDrawar={setShowDrawar} showDrawar={showDrawar} />
    </Box>
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
