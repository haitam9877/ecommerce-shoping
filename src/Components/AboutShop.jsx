import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RefreshIcon from "@mui/icons-material/Refresh";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useStyled } from "../Contexts/StyledContext";

export default function AboutShop() {
  return (
    <Container maxWidth="lg" sx={{ padding: "40px 0" }}>
      <Grid container spacing={2}>
        <AboutCard
          icon={<LocalShippingIcon />}
          title="FREE SHIPPING"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
        />
        <AboutCard
          icon={<RefreshIcon />}
          title="FREE RETURNS"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
        />
        <AboutCard
          icon={<QuestionMarkIcon />}
          title="CUSTOMER SUPPORT"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
        />
      </Grid>
    </Container>
  );
}

// eslint-disable-next-line react/prop-types
const AboutCard = ({ icon, title, body }) => {
  const theme = useTheme();
  const { Item } = useStyled();

  return (
    <Grid lg={4} md={6}>
      <Item>
        <Box sx={{ display: "flex" }}>
          <Box
            component="span"
            sx={{
              "& > .MuiSvgIcon-root": {
                fontSize: 50,
                color: theme.palette.primary.light,
              },
            }}
          >
            {icon}
          </Box>

          <Box marginLeft={3}>
            <Typography variant="h6" color={theme.palette.secondary.dark}>
              {title}
            </Typography>
            <Typography variant="body1" color={theme.palette.secondary.light}>
              {body}
            </Typography>
          </Box>
        </Box>
      </Item>
    </Grid>
  );
};
