import React from 'react';
import './SpaceCardContainer.css';
import { SpaceCard } from '../SpaceCard/SpaceCard';

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
  

  return (
    <div className="SpaceCardContainer">
      <p>Space Card Container</p>
    </div>
  );
}