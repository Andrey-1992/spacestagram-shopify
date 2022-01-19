import React from 'react';
import './SpaceCard.css';

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
  nasaData?: todayNasaApi
}

export const SpaceCard: React.FC<Props> = ({ nasaData }) => {
  return (
    <div className="SpaceCard">
    </div>
  );
}