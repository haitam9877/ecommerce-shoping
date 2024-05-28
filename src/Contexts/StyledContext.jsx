import { Box, Button, Divider, styled } from "@mui/material";
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";

// إنشاء الـ Context
const StyledContext = createContext();

// إنشاء موفر الـ Context
// eslint-disable-next-line react/prop-types
export const StyledProvider = ({ children }) => {
  const Item = styled(Box)(({ theme, sx }) => ({
    padding: theme.spacing(1),
    display: "flex",
    color: theme.palette.primary.light,

    sx,
  }));

  const DividerPage = styled(Divider)(({ theme, sx }) => ({
    background: theme.palette.primary.light,
    width: 43,
    padding: "1px 0",
    margin: "20px auto",
    sx,
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
  const StyledLink = styled(Link)(({ theme, to, sx }) => ({
    fontFamily: theme.typography.fontFamily[1],
    transition: "0.3s all",

    textDecoration: "none",

    "&:hover": {
      color: theme.palette.primary.light,
    },

    to,
    sx,
  }));

  return (
    <StyledContext.Provider
      value={{ DividerPage, Item, StyledLink, ButtonStyled }}
    >
      {children}
    </StyledContext.Provider>
  );
};

// هوك مخصص لاستخدام الـ Context
// eslint-disable-next-line react-refresh/only-export-components
export const useStyled = () => {
  return useContext(StyledContext);
};
