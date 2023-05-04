import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ProjectContainer from './components/Projects/ProjectContainer/ProjectContainer';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import About from './components/About/About';
import NotFound from './components/NotFound';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navigation />
      <Wrapper>
        <Routes>
          <Route path="/" element={<ProjectContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
