import { Box, Container, Typography, useTheme } from "@mui/material";

import CustomSlider from "./Slider";
import { useStyled } from "../Contexts/StyledContext";

export default function Products() {
  const theme = useTheme();
  const { DividerPage } = useStyled();
  return (
    <Box
      sx={{
        background: theme.palette.boxLight,
        padding: "40px 0 5px 0 ",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <DividerPage textAlign="center" variant="inset" />
          <Typography variant="h5">Featured Products</Typography>
        </Box>
        <CustomSlider />
      </Container>
    </Box>
  );
}
