import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RefreshIcon from "@mui/icons-material/Refresh";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useStyled } from "../Contexts/StyledContext";

export default function AboutShop() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ paddingBottom: 5, paddingTop: 5 }}>
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
    </Box>
  );
}

// eslint-disable-next-line react/prop-types
const AboutCard = ({ icon, title, body }) => {
  const theme = useTheme();
  const { Item } = useStyled();

  return (
    <Grid md={4} sm={6} xs={12}>
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
