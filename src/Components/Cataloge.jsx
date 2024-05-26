/* eslint-disable react/prop-types */
import { Box, Container, Typography, styled, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  color: theme.palette.primary.light,
}));

export default function Cataloge() {
  return (
    <Container maxWidth="lg" sx={{ paddingBottom: 5, paddingTop: 5 }}>
      <Grid container spacing={2} sx={{ padding: { xs: "0", sm: "0 50px" } }}>
        <CardImage img="/men.jpg" title="Men" />
        <CardImage img="/children.jpg" title="Children" />
        <CardImage img="/women.jpg" title="Women" />
      </Grid>
    </Container>
  );
}

const CardImage = ({ img, title }) => {
  const theme = useTheme();
  return (
    <Grid lg={4} sm={6} md={6}>
      <Item>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            "&:hover .image": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Box
            component="img"
            className="image"
            src={img}
            alt=""
            style={{ width: "100%", transition: ".4s all" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                padding: " 20px",
                color: theme.palette.primary.contrastText,
              }}
            >
              <Typography
                component="span"
                color="white"
                sx={{
                  fontFamily: theme.typography.fontFamily[0],
                  letterSpacing: 5,
                  fontSize: "12.5px",
                }}
              >
                COLLECTIONS
              </Typography>
              <Typography variant="h4">{title}</Typography>
            </Box>
          </Box>
        </Box>
      </Item>
    </Grid>
  );
};
