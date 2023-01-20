

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Home from "./pages/Home";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fab from '@mui/material/Fab';
import MKBox from "components/MKBox";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { store } from './store'
import { Provider } from 'react-redux'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import routes from "routes";
import footerRoutes from "footerRoutes";

import Navbar from "./components/Navbars/DefaultNavbar"
import DefaultFooter from "components/Footers/DefaultFooter";

import theme from "./assets/theme"
import PropetyList from 'pages/PropertyList';

const handleButtonClick = () => {
  const link = "https://wa.me/7207724191/"
  window.open(link, "_blank")
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <Navbar
            routes={routes}
            transparent
            light
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<PropetyList />} />
          </Routes>
          <Box sx={{ textAlign: "center", width: 50, height: 50, borderRadius: 50, position: "fixed", bottom: 70, right: 25, }}>
            <Fab color="common">
              <WhatsAppIcon onClick={handleButtonClick} fontSize='large' sx={{ color: "#25d366" }} />
            </Fab>
          </Box>

          <MKBox pt={6} px={1} mt={6}>
            <DefaultFooter content={footerRoutes} />
          </MKBox>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
