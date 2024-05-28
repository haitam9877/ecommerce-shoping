import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Box, Container, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { useRef, useEffect } from "react";

function handleClick(event) {
  event.preventDefault();
}

export default function BasicBreadcrumbs() {
  const theme = useTheme();

  const location = useLocation();

  const prevLocation = useRef();

  useEffect(() => {
    prevLocation.current = location.pathname;
  }, [location]);

  const pathnames = location.pathname.split("/").filter((x) => x);

  if (location.pathname !== "/") {
    return (
      <Box
        role="presentation"
        onClick={handleClick}
        sx={{ padding: "15px 0", background: theme.palette.boxLight }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/">
              Home
            </Link>

            <Typography color="text.primary" textTransform="capitalize">
              {pathnames}
            </Typography>
          </Breadcrumbs>
        </Container>
      </Box>
    );
  }
}
