import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './component/pages/MainIndex/MainIndex'
import Tournaments from './component/pages/Tournaments/Tournaments';
import Help from './component/pages/Help/Help';
import About from './component/pages/About/about';

import ScrollToTop from './component/ScrollToTop/ScrollToTop';

function App() {
    return (
        <>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tournaments' element={<Tournaments />} />
                <Route path='/help' element={<Help />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </BrowserRouter>
        </>

    );
}
export default App;

