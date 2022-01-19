import React from 'react';
import './SpaceCard.css';
import { useState } from 'react';
interface Props {
  key?: number
  id?: number
  title?: string
  date?: string
  url?: string
  explanation?: string
}

export const SpaceCard: React.FC<Props> = ({ key, id, title , date, url, explanation}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  return (
    <div className='space-card' key={key}>
      <img className='space-image'  src={url} alt={title}/>
      <h2 className='pic-title'>{title}</h2>
      <h2 className='capture-date'>{date}</h2>
      {explanation}
      <button
      className='like-button'
      onClick={() => setIsFavorite(!isFavorite) }
      >{isFavorite ? 'Liked!' : 'Like'}</button>
    </div>
  );
}