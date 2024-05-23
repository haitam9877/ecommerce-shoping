import { Box, Container, Typography, useTheme } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import { useStyled } from "../Contexts/StyledContext";

export default function SectionOne() {
  const theme = useTheme();

  const { ButtonStyled } = useStyled();

  return (
    <Box
      className="section-one"
      sx={{
        background: `url('/hero_1.jpg')center/cover no-repeat`,
        height: 550,
        marginTop: 1,
        display: "flex",
        alignItems: { xs: "start", md: "center" },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="end"
          sx={{ height: "100%", alignItems: { xs: "start", md: "center" } }}
        >
          <Grid
            container
            width="100%"
            sx={{ justifyContent: { xs: "center", md: "end" } }}
          >
            <Grid
              xs={12}
              sm={8}
              md={5}
              sx={{
                textAlign: { xs: "center", md: "start" },
                paddingTop: { xs: 4 },
              }}
            >
              <Typography
                variant="h2"
                sx={{ maxWidth: { md: 390 }, fontSize: { xs: 25, md: 50 } }}
              >
                Finding Your Perfect Shoes
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: { md: 480 },
                  marginTop: 3,
                  color: theme.palette.secondary.dark,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </Typography>

              <Box>
                <ButtonStyled>SHOP NOW</ButtonStyled>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
