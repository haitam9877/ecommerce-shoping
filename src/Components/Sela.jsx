import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useStyled } from "../Contexts/StyledContext";

export default function Sela() {
  const theme = useTheme();
  const { ButtonStyled, DividerPage } = useStyled();

  return (
    <Box
      sx={{
        padding: "40px 0 80px 0 ",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <DividerPage textAlign="center" variant="inset" />
          <Typography variant="h5">Big Sale!</Typography>
        </Box>
        <Grid container spacing={2} marginTop="40px" justifyContent="center">
          <Grid md={7} sm={11} xs={12}>
            <Box component="img" src="/blog_1.jpg" width="100%" />
          </Grid>
          <Grid
            md={5}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 40px",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography variant="h4" color={theme.palette.primary.main}>
                50% less in all items
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: { md: 480 },
                  marginTop: 3,
                  color: theme.palette.secondary.main,
                }}
              >
                By
                <Box
                  component="span"
                  color={theme.palette.primary.main}
                  marginLeft="10px"
                >
                  Carl Smith
                </Box>{" "}
                <span style={{ margin: "0 20px" }}>•</span> September 3, 2018
              </Typography>
              <Typography variant="body1" marginTop="20px">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam iste dolor accusantium facere corporis ipsum animi
                deleniti fugiat. Ex, veniam?
              </Typography>

              <Box>
                <ButtonStyled>SHOP NOW</ButtonStyled>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
