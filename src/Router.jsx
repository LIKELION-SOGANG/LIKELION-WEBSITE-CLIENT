import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './page/About';
import Credit from './page/Credit';
import Contact from './page/Contact';
import People from './page/People';
import Projects from './page/Projects';
import Recruit from './page/Recruit';
import Apply from './page/Apply';
import CheckIsPass from './page/CheckIsPass';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/credits" element={<Credit />} />
      <Route path="/people" element={<People />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/recruit" element={<Recruit />} />
      <Route path="/recruit/apply" element={<Apply />} />
      {/* 합격자 결과조회하는 페이지 */}
      <Route path="/recruit/ajtwoddltkwkcjfja" element={<CheckIsPass />} />
    </Routes>
  );
}

export default Router;
