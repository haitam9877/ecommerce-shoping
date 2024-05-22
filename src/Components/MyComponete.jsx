import React from "react";

import { Box } from "@mui/material";
import { useStyledLink } from "../Contexts/StyledContext";

const MyComponent = () => {
  const { StyledLink, ButtonStyled } = useStyledLink();

  return (
    <div>
      <Box sx={{ typography: "h6", padding: "10px", border: "1px solid red" }}>
        <StyledLink to="/home">Home</StyledLink>
      </Box>
      <Box
        sx={{
          typography: "body1",
          padding: "10px",
          border: "1px solid purple",
        }}
      >
        <StyledLink to="/about">About</StyledLink>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <ButtonStyled>Click Me</ButtonStyled>
      </Box>
    </div>
  );
};

export default MyComponent;
