import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Project from '../components/pages/Project';
import Skills from '../components/pages/Skills';

import CommonStyle from '../assets/style/CommonStyle';

export default function Router() {
  return (
    <CommonStyle.Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </CommonStyle.Main>
  );
}
