import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../pages/AboutUs';
import Catalog from '../pages/Catalog';
import Page2 from '../pages/Favorites';
import { fetchCampers } from '../api/api';


const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const campers = await fetchCampers();
      console.log(campers);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
    </Router>
  );
};

export default App;
