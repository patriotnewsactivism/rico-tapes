import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Episode from './components/Episode';
import EpisodeList from './components/EpisodeList';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
`;

const MainContent = styled.main`
  padding-top: 0;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Hero />
        <EpisodeList />
        <Episode />
      </MainContent>
    </AppContainer>
  );
}

export default App;