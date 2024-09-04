import React from 'react';
import Header from './Header';
import CTA from './CTA';
import '../styles/App.scss';
import Projects from './Projects';
import SkillsTable from './SkillsTable';

function App() {
  return (
    <div className="App">
      <div className="App-header" id="home">
        <Header />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <div id="skills">
        <SkillsTable />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;
