import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Project from '../components/pages/Project';
import Soonsoo from '../components/pages/project/Soonsoo';
import Yanadoo from '../components/pages/project/Yanadoo';
import Skill from '../components/pages/Skill';

import CommonStyle from '../assets/style/CommonStyle';

export default function Router() {
  return (
    <CommonStyle.Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project/:company" element={<Project />} />
        {/* <Route path="/project/*" element={<Project />}>
          <Route path="soonsoo" element={<Soonsoo />} />
          <Route path="yanadoo" element={<Yanadoo />} />
        </Route> */}
      </Routes>
    </CommonStyle.Main>
  );
}
