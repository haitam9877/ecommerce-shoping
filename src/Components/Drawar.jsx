import {
  Box,
  Container,
  Hidden,
  List,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Navbar";
import { useStyledLink } from "../Contexts/StyledContext";

const drawerWidth = 280;

export default function Drawere({ showDrawar, setShowDrawar }) {
  const theme = useTheme();

  const [isClosing, setIsClosing] = useState(false);

  const closeing = () => {
    setIsClosing(true);
    setShowDrawar(false);
  };
  // const ListUl = styled(List)({
  //   display: { xs: "block", md: "flex" },
  //   listStyle: "none",
  //   justifyContent: "center",
  // });

  const [isActive, setIsActive] = useState("");
  const linkNavbar = [
    "home",
    "about",
    "shop",
    "catalogue",
    "new arrivals",
    "contact",
  ];

  // const StyledLink = styled(Link)({
  //   transition: ".3s all",
  //   color: theme.palette.secondary.dark,
  //   textDecoration: "none",
  //   fontFamily: theme.typography.fontFamily,

  //   "&:hover": {
  //     color: theme.palette.primary.light,
  //   },
  //   "&.active": {
  //     color: theme.palette.primary.light,
  //   },
  // });

  const { StyledLink } = useStyledLink();

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

  const isLargeScrren = useMediaQuery(theme.breakpoints.up("md"));

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
