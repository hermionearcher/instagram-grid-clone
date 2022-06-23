import React from 'react';
import './style.css';
import TopBar from './components/TopBar';
import FollowersBar from './components/FollowersBar';
import BioBar from './components/BioBar';
import Highlights from './components/Highlights';
import Grid from './components/Grid';

export default function App() {
  return (
    <div className="app">
      <TopBar />
      <FollowersBar />
      <BioBar />
      <Highlights />
      <Grid />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
