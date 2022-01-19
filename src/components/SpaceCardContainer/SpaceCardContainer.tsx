import React from 'react';
import './SpaceCardContainer.css';

interface Props {
  date?: string
  explanation?: string
  hdurl?: string
  media_type?: string
  service_version?: string
  title?: string
  url?: string
  copyright?: string
}

export const SpaceCardContainer = () => {
  return (
    <div className="SpaceCardContainer">
      <p>Space Card Container</p>
    </div>
  );
}