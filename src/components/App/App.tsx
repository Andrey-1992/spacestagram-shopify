import React from 'react';
import './App.css';
import { SpaceCardContainer } from '../SpaceCardContainer/SpaceCardContainer';
import { Loading } from '../Loading/Loading';


export const App = () => {
  return (
    <div className="App">
      <h1 className='header'>Spacestagram</h1>
      <h2 className='subheader'>Brought to you by NASA's image API</h2>
      <Loading />
      <SpaceCardContainer />
    </div>
  );
}
