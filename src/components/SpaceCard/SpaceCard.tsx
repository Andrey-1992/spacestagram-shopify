import React from 'react';
import './SpaceCard.css';
interface Props {
  key?: number
  id?: number
  title?: string
  date?: string
  url?: string
  explanation?: string
}

export const SpaceCard: React.FC<Props> = ({ key, id, title , date, url, explanation}) => {
  return (
    <div className='space-card' key={key}>
      <img className='space-image'  src={url} alt={title}/>
      <h2 className='camera-name'>{title}</h2>
      <h2 className='capture-date'>{date}</h2>
      {explanation}
    </div>
  );
}