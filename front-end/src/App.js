import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import Page from './components/Page';
import Home from "pages/Home";
import Properties from "pages/Properties";
import Detail from "pages/Detail";




const App = () => {
  return (
    <Page>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Page>

  );
};

export default App;
