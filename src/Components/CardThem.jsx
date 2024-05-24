import { Avatar, Box, Container, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useStyled } from "../Contexts/StyledContext";
import Grid from "@mui/material/Unstable_Grid2";

export default function CardThem() {
  const { DividerPage } = useStyled();

  return (
    <Box
      sx={{
        padding: "40px 0 ",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <DividerPage textAlign="center" variant="inset" />
          <Typography variant="h5">The Team</Typography>
        </Box>
        <Grid container spacing={2} marginTop="40px" justifyContent="center">
          <CardBox
            image="https://themewagon.github.io/shoppers/images/person_1.jpg"
            name="Elizabeth Graham"
            work="FRONT-END"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta."
          />
          <CardBox
            image="https://themewagon.github.io/shoppers/images/person_2.jpg"
            name="Jennifer Greive"
            work="FRONT-END"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta."
          />
          <CardBox
            image="https://themewagon.github.io/shoppers/images/person_3.jpg"
            name="Patrick Marx"
            work="FRONT-END"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta."
          />
          <CardBox
            image="https://themewagon.github.io/shoppers/images/person_4.jpg"
            name="Mike Coolbert"
            work="FRONT-END"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta."
          />
        </Grid>
      </Container>
    </Box>
  );
}

// eslint-disable-next-line react/prop-types
const CardBox = ({ image, name, work, body }) => {
  const theme = useTheme();
  return (
    <Grid md={3} sm={6} xs={12}>
      <Card
        sx={{
          maxWidth: "100%",
          paddingBottom: "50px",
          boxShadow: "none",
        }}
      >
        <Avatar
          sx={{ width: 120, height: 120, margin: "0 auto" }}
          src={image}
          title="green iguana"
        />
        <CardContent
          sx={{
            textAlign: "center",
            padding: "15px",
          }}
        >
          <Typography variant="h5" fontSize="25px" fontWeight="400">
            {name}
            <Typography variant="body1">{work}</Typography>
          </Typography>

          <Typography variant="body1" marginTop="20px">
            {body}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
