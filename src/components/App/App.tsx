import React from 'react';
import './App.css';
import { SpaceCardContainer } from '../SpaceCardContainer/SpaceCardContainer';
import { Loading } from '../Loading/Loading';
import { fetchSpaceContainerImg, fetchTodaysPic } from '../Util/ApiCalls';
import { useState, useEffect } from 'react';

interface nasaPicTodayInfo {
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
  copyright: string
}

export const App: React.FC = () => {
  const [spaceData, setSpaceData] = useState<any>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading ] = useState<boolean>(true);

  return (
    <div className="App">
      <h1 className='header'>Spacestagram</h1>
      <h2 className='subheader'>Brought to you by NASA's image API</h2>
      <Loading />
      <SpaceCardContainer />
    </div>
  );
}
