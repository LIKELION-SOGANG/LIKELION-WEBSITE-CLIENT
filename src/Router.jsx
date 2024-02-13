import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './page/About';
import Credit from './page/Credit';
import Contact from './page/Contact';
import People from './page/People';
import Projects from './page/Projects';
import Recruit from './page/Recruit';
import Apply from './page/Apply';
import ProjectDetail from './components/projects/projectDetail';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/credit" element={<Credit />} />
      <Route path="/people" element={<People />} />
      <Route path="/projects" element={<Projects />} />
      <Route
        path="/projects/projectDetail/:projectId"
        element={<ProjectDetail />}
      />
      <Route path="/recruit" element={<Recruit />} />
      <Route path="/recruit/apply" element={<Apply />} />
    </Routes>
  );
}

export default Router;
