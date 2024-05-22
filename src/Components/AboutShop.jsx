import {
  Box,
  Container,
  Paper,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RefreshIcon from "@mui/icons-material/Refresh";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  color: theme.palette.primary.light,
}));

export default function AboutShop() {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ padding: "40px 0" }}>
      <Grid container spacing={2}>
        <Grid lg={4} md={6}>
          <Item>
            {" "}
            <Box sx={{ display: "flex" }}>
              <LocalShippingIcon sx={{ fontSize: 60 }} />
              <Box marginLeft={3}>
                <Typography variant="h6" color={theme.palette.secondary.dark}>
                  FREE SHIPPING
                </Typography>
                <Typography
                  variant="body1"
                  color={theme.palette.secondary.light}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid lg={4} md={6}>
          <Item>
            {" "}
            <Box sx={{ display: "flex" }}>
              <RefreshIcon sx={{ fontSize: 60 }} />
              <Box marginLeft={3}>
                <Typography variant="h6" color={theme.palette.secondary.dark}>
                  FREE SHIPPING
                </Typography>
                <Typography
                  variant="body1"
                  color={theme.palette.secondary.light}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid lg={4} md={6}>
          <Item>
            {" "}
            <Box sx={{ display: "flex" }}>
              <QuestionMarkIcon sx={{ fontSize: 60 }} />
              <Box marginLeft={3}>
                <Typography variant="h6" color={theme.palette.secondary.dark}>
                  FREE SHIPPING
                </Typography>
                <Typography
                  variant="body1"
                  color={theme.palette.secondary.light}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
