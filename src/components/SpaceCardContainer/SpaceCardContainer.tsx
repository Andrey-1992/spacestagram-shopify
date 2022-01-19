import React from 'react';
import './SpaceCardContainer.css';
import { SpaceCard } from '../SpaceCard/SpaceCard';
import { useState } from 'react';

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
interface Props {
  nasaApi?: Array<nasaApiData>
}

export const SpaceCardContainer: React.FC<Props> = ({nasaApi}) => {
  const dataContainer = nasaApi?.map(data => {
    return(
      <SpaceCard 
        key={Date.now()}
        title={data.title}
      />
    )
  })

  return (
    <div className="SpaceCardContainer">
      <p>Space Card Container</p>
      {dataContainer}
    </div>
  );
}