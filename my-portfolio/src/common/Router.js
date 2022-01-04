import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Project from '../components/pages/Project';
import Skill from '../components/pages/Skill';

export default function Router() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </main>
  );
}