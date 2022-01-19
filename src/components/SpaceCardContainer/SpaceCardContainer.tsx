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
}
interface Props {
  nasaApi?: Array<nasaApiData>
}

let id = 0;
function getId() {
  return id++;
}

export const SpaceCardContainer: React.FC<Props> = ({nasaApi}) => {
  const dataContainer = nasaApi?.map(data => {
    return(
      <SpaceCard 
        key={getId()}
        id={getId()}
        title={data.title}
        date={data.date}
        url={data.url}
        explanation={data.explanation}
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