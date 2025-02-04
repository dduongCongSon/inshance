import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './page/home/Home';
import Inbox from './page/Inbox';
import Explore from './page/Explore';

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </Router>
  );
};

export default App;
