import {
  Box,
  Container,
  Divider,
  Input,
  Link,
  List,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useStyledLink } from "../Contexts/StyledContext";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
export default function Footer() {
  const theme = useTheme();

  const { StyledLink, ButtonStyled } = useStyledLink();

  const Boxs = styled(StyledLink)(({ theme }) => ({
    color: theme.palette.secondary.main,
    lineHeight: 2.7,
    fontSize: 14,
    fontWeight: 100,
  }));

  return (
    <>
      <Divider />

      <Box padding="60px 0">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid md={6} xs={12}>
              <BoxFooter title="Navigations">
                <Box sx={{ display: "flex" }}>
                  <ListFooter>
                    <Boxs>Sell online</Boxs>
                    <Boxs>Features</Boxs>
                    <Boxs>Shopping cart</Boxs>
                    <Boxs>Store builder</Boxs>
                  </ListFooter>
                  <ListFooter>
                    <Boxs>Mobile commerce</Boxs>
                    <Boxs>Dropshipping</Boxs>
                    <Boxs>Website development</Boxs>
                  </ListFooter>
                  <ListFooter>
                    <Boxs>Point of sale</Boxs>
                    <Boxs>Hardware</Boxs>
                    <Boxs>Software</Boxs>
                  </ListFooter>
                </Box>
              </BoxFooter>
            </Grid>
            <Grid md={6} xs={12}>
              <Box sx={{ width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid sm={6} xs={12} sx={{ width: "100%" }}>
                    <BoxFooter title="Promo" sx={{ width: "100%" }}>
                      <Box display="flex">
                        <ListFooter style={{ width: "100%" }}>
                          <Box
                            component="img"
                            src="/hero_1.jpg"
                            sx={{ maxWidth: "100%" }}
                          />
                          <Typography
                            variant="body1"
                            marginTop="20px"
                            color={theme.palette.primary.light}
                            fontSize={17.5}
                          >
                            Finding Your Perfect Shoes
                          </Typography>
                          <Typography variant="body1">
                            Promo from nuary 15 — 25, 2019
                          </Typography>
                        </ListFooter>
                      </Box>
                    </BoxFooter>
                  </Grid>
                  <Grid sm={6} xs={12}>
                    <BoxFooter title="Contact Info">
                      <Box display="flex">
                        <ListFooter style={{ width: "100%" }}>
                          <ContactInfo
                            body="grsger203 Fake St. Mountain View, San Francisco, California, USAgerg"
                            icon={<LocationOnIcon />}
                          />

                          <ContactInfo
                            body="+213666731996"
                            icon={<LocalPhoneIcon />}
                          />
                          <ContactInfo
                            body="boubaouheithe22@gmail.com"
                            icon={<EmailIcon />}
                          />
                        </ListFooter>
                      </Box>
                    </BoxFooter>
                    <BoxFooter title="Subscribe">
                      <Box
                        sx={{
                          position: "relative",

                          padding: "5px 0",
                          border: `1px solid  ${theme.palette.secondary.main}`,
                        }}
                      >
                        <Box
                          component="input"
                          type="text"
                          placeholder="Email"
                          sx={{
                            height: "100%",
                            border: "none",
                            outline: "none",
                            fontSize: 18,
                            padding: "5px 10px",
                          }}
                        />
                        <ButtonStyled
                          sx={{
                            margin: 0,
                            position: "absolute",
                            top: 1,
                            right: 1,
                            height: "95%",
                            "&:hover": {
                              transform: "scale(1) translateY(0px)",
                            },
                          }}
                        >
                          send
                        </ButtonStyled>
                      </Box>
                    </BoxFooter>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Box marginTop={20} textAlign="center">
            <Typography variant="body1">
              Copyright ©2024 All rights reserved | This template is made with
              <i className=" fa-solid haitam"></i>
              by Heithem Boubaou
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

const BoxFooter = ({ title, children }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      {children}
    </>
  );
};

const ListFooter = ({ children, style }) => {
  return (
    <List
      sx={[
        style,
        {
          display: "flex",
          flexDirection: "column",
          flex: "1 0 auto",
        },
      ]}
    >
      {children}
    </List>
  );
};

const ContactInfo = ({ icon, body }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        marginBottom: 1.5,
        color: theme.palette.primary.light,
      }}
    >
      {icon}
      <Box marginLeft={1}>
        <Typography variant="body1">{body}</Typography>
      </Box>
    </Box>
  );
};
