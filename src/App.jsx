import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { grey, indigo } from "@mui/material/colors";
import { StyledProvider } from "./Contexts/StyledContext";
import About from "./Pages/About";
import BasicBreadcrumbs from "./Components/BasicBreadcrumbs";

const theme = createTheme({
  typography: {
    fontFamily: ["Bebas Neue", "Noto_Sans"],
    h2: {
      fontWeight: 800,
      letterSpacing: 2,
      fontFamily: "Noto_Sans",
    },
    body1: {
      lineHeight: "2em",
      fontSize: 14,
      color: grey[500],
      fontFamily: "Noto_Sans",
    },
    body2: {
      fontSize: 16,
      fontWeight: "bold",
      fontFamily: "Noto_Sans",
    },
  },
  palette: {
    primary: {
      main: indigo[400],
      light: indigo[300],
      contrastText: "#fff",
    },
    secondary: {
      main: grey[500],
      dark: grey[700],
    },
    boxLight: "#f8f9fa",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<h1>hhd</h1>} />
          <Route path="/catalogue" element={<h1>hhf</h1>} />
          <Route path="/new-arrivals" element={<h1>hah</h1>} />
          <Route path="/contact" element={<h1>hfh</h1>} />
        </Routes>
        <BasicBreadcrumbs />
        <Footer />
      </StyledProvider>
    </ThemeProvider>
  );
}

export default App;
