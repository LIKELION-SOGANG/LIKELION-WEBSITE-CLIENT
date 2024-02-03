import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './page/About';
import Credit from './page/Credit';
import Contact from './page/Contact';
import People from './page/People';
import Projects from './page/Projects';
import Recruit from './page/Recruit';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/credit" element={<Credit />} />
      <Route path="/people" element={<People />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/recruit" element={<Recruit />} />
    </Routes>
  );
}

export default Router;
