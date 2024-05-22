import { Box, Button, styled } from "@mui/material";
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";

// إنشاء الـ Context
const StyledLinkContext = createContext();

// إنشاء موفر الـ Context
// eslint-disable-next-line react/prop-types
export const StyledLinkProvider = ({ children }) => {
  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    display: "flex",
    color: theme.palette.primary.light,
  }));

  // إنشاء المكون StyledButton باستخدام الثيم
  const ButtonStyled = styled(Button)(({ theme, sx }) => ({
    color: "white",
    padding: "10px 20px",
    background: theme.palette.primary.light,
    letterSpacing: 3,
    fontSize: 13,
    marginTop: "40px",
    transition: ".3s all",
    "&:hover": {
      background: theme.palette.primary.main,
      boxShadow: theme.shadows[10],
      transform: "scale(1.01) translateY(-3px)",
    },
    sx,
  }));

  // إنشاء المكون StyledLink باستخدام الثيم
  const StyledLink = styled(Link)(({ theme, style }) => ({
    fontFamily: theme.typography.fontFamily[1],
    transition: "0.3s all",
    color: theme.palette.secondary.dark,
    textDecoration: "none",

    "&:hover": {
      color: theme.palette.primary.light,
    },
    "&.active": {
      color: theme.palette.primary.light,
    },
    style,
  }));

  return (
    <StyledLinkContext.Provider value={{ Item, StyledLink, ButtonStyled }}>
      {children}
    </StyledLinkContext.Provider>
  );
};

// هوك مخصص لاستخدام الـ Context
// eslint-disable-next-line react-refresh/only-export-components
export const useStyledLink = () => {
  return useContext(StyledLinkContext);
};
