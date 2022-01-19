import React from 'react';
import './SpaceCardContainer.css';

interface todayNasaApi {
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
  todayNasaApi?: todayNasaApi
}

export const SpaceCardContainer: React.FC<Props> = ({ todayNasaApi}) => {
  return (
    <div className="SpaceCardContainer">
      <p>Space Card Container</p>
    </div>
  );
}