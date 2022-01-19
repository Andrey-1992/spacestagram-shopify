import React from 'react';
import './App.css';
import { SpaceCardContainer } from '../SpaceCardContainer/SpaceCardContainer';
import { Loading } from '../Loading/Loading';
import { fetchSpaceContainerImg, fetchTodaysPic } from '../Util/ApiCalls';
import { useState, useEffect } from 'react';

interface nasaApiData {
  date?: string
  explanation?: string
  hdurl?: string
  media_type?: string
  service_version?: string
  title?: string
  url?: string
  copyright?: string
}

export const App: React.FC = () => {
  const [nasaData, setNasaData] = useState<any>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading ] = useState<boolean>(true);

  useEffect(() => {
    getTodayData()
  }, []);

  const getTodayData = async () => {
    fetchSpaceContainerImg()
    // .then(data => console.log(data))
    .then(data => setNasaData(data))
    .then(() => setIsLoading(false))
    .catch(error => setError(error))
  }

  return (
    <div className="App">
      <h1 className='header'>Spacestagram</h1>
      <h2 className='subheader'>Brought to you by NASA's image API</h2>
      { isLoading && <Loading /> }
      <SpaceCardContainer nasaApi={nasaData}/>
    </div>
  );
}
