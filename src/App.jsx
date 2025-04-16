import React from 'react';
import Home from './Pages/Home';
import Course from './Pages/Course';
import Contactus from './Pages/Contactus';
import Gallery from './Pages/Galley';
import Btrm from './Pages/Btrm';
import Bwk from './Pages/Bwk';
import Bwts from './Pages/Bwts';
import Eeac from './Pages/Eeac';
import Framo from './Pages/Framo';
import Lvm from './Pages/Lvm'; 
import Scale from './Pages/Scale';
import Ssbt from './Pages/Ssbt';
import Sts from './Pages/Sts';
import CertificateAuthentication from './Pages/CertificateAuthentication';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/btrm" element={<Btrm />} />
        <Route path="/bwk" element={<Bwk />} />
        <Route path="/bwts" element={<Bwts />} />
        <Route path="/eeac" element={<Eeac />} />
        <Route path="/framo" element={<Framo />} />
        <Route path="/lvm" element={<Lvm />} />
        <Route path="/scale" element={<Scale />} />
        <Route path="/ssbt" element={<Ssbt />} />
        <Route path="/sts" element={<Sts />} />
        <Route path="/certificateauthentication" element={<CertificateAuthentication />} />
        
      </Routes>
    </Router>
  );
};

export default App;
