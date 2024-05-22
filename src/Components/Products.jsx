import {
  Box,
  Container,
  Divider,
  Typography,
  styled,
  useTheme,
} from "@mui/material";

import CustomSlider from "./Slider";

const DividerPage = styled(Divider)(({ theme }) => ({
  background: theme.palette.primary.light,
  width: 43,
  padding: "1.5px 0",
  margin: "20px auto",
}));

export default function Products() {
  const theme = useTheme();
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
