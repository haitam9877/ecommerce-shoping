import { Box, Container, Hidden, List } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { Logo } from "./Navbar";
import { useStyled } from "../Contexts/StyledContext";

const drawerWidth = 280;

// eslint-disable-next-line react/prop-types
export default function Drawere({ showDrawar, setShowDrawar }) {
  // eslint-disable-next-line no-unused-vars
  const [isClosing, setIsClosing] = useState(false);

  const closeing = () => {
    setIsClosing(true);
    setShowDrawar(false);
  };

  const [isActive, setIsActive] = useState("");
  const linkNavbar = [
    "home",
    "about",
    "shop",
    "catalogue",
    "new arrivals",
    "contact",
  ];

  const { StyledLink } = useStyled();

  const listLinkNavbar = linkNavbar.map((link, index) => {
    return (
      <li key={index}>
        <Box
          sx={{
            margin: { xs: "0", md: "0 10px" },
            textTransform: { xs: "capitalize", md: "uppercase" },
            fontSize: { xs: "20px", md: "15px" },
            lineHeight: { xs: "3em" },
          }}
        >
          <StyledLink
            margin="50px"
            onClick={() => setIsActive(index)}
            className={
              isActive === index ? "link-navbar active" : "link-navbar"
            }
          >
            {link}
          </StyledLink>
        </Box>
      </li>
    );
  });

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Hidden smUp implementation="css">
        <Drawer
          anchor="right"
          open={showDrawar}
          onClose={closeing}
          variant="temporary"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              padding: "20px",
            },
          }}
        >
          <List>
            <Logo styleds={{ marginBottom: 5 }} />
            {listLinkNavbar}
          </List>
        </Drawer>
      </Hidden>

      <Hidden mdDown implementation="css">
        <Box>
          <List sx={{ display: "flex" }}> {listLinkNavbar}</List>
        </Box>
      </Hidden>
    </Container>
  );
}
