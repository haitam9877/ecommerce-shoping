import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useStyled } from "../Contexts/StyledContext";

export default function SectionFlex() {
  const theme = useTheme();
  const { ButtonStyled, DividerPage } = useStyled();

  return (
    <Box
      sx={{
        padding: "40px 0 80px 0 ",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop="40px" justifyContent="center">
          <Grid
            md={6}
            sm={11}
            xs={12}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Box component="img" src="/blog_1.jpg" width="100%" />
          </Grid>
          <Grid
            md={6}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Box sx={{ padding: "0 30px", maxWidth: { md: "90%" } }}>
              <DividerPage sx={{ margin: "20px 0" }} />
              <Typography variant="h5">How We Started</Typography>
              <Typography variant="body1" marginTop="20px">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repellat, dicta at laboriosam, nemo exercitationem itaque
                eveniet architecto cumque, deleniti commodi molestias
                repellendus quos sequi hic fugiat asperiores illum. Atque, in,
                fuga excepturi corrupti error corporis aliquam unde nostrum
                quas.
              </Typography>

              <Typography variant="body1" marginTop="20px">
                Accusantium dolor ratione maiores est deleniti nihil?
                Dignissimos est, sunt nulla illum autem in, quibusdam cumque
                recusandae, laudantium minima repellendus.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
