import { Container, Hidden, List, ListItem, useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { Logo } from "./Navbar";
import { useStyled } from "../Contexts/StyledContext";
import { useLocation } from "react-router-dom";

const drawerWidth = 280;

// eslint-disable-next-line react/prop-types
export default function Drawere({ showDrawar, setShowDrawar }) {
  // eslint-disable-next-line no-unused-vars
  const [isClosing, setIsClosing] = useState(false);

  const closeing = () => {
    setIsClosing(true);
    setShowDrawar(false);
  };

  const { StyledLink } = useStyled();

  const { pathname } = useLocation();

  const theme = useTheme();

  const listLinkNavbar = [
    { label: "home", path: "/" },
    { label: "about", path: "/about" },
    { label: "shop", path: "/shop" },
    { label: "catalogue", path: "/catalogue" },
    { label: "new arrivals", path: "/new-arrivals" },
    { label: "contact", path: "/contact" },
  ].map((link) => {
    return (
      <ListItem
        sx={{
          display: { md: "inline-block", xs: "block" },
          width: "auto",
          textTransform: { md: "uppercase", xs: "capitalize" },
        }}
        key={link.path}
      >
        <StyledLink
          to={`${link.path}`}
          sx={{
            color:
              pathname === link.path
                ? theme.palette.primary.light
                : theme.palette.secondary.dark,
          }}
        >
          {link.label}
        </StyledLink>
      </ListItem>
    );
  });

  return (
    <Container maxWidth="lg">
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
        <List sx={{ textAlign: "center" }}> {listLinkNavbar}</List>
      </Hidden>
    </Container>
  );
}
