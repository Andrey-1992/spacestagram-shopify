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
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [showExplanation, setShowExplanation ] = useState<boolean>(false);

  return (
    <div className='space-card' key={key}>
      <img className='space-image' src={!url ? "No photo available" : url} alt={title}/>
      <h2 className='pic-title'>{!title ? "No title available" : title}</h2>
      <h3 className='capture-date'>{!date ? "No date available" : date}</h3>
      <button
        className='like-button'
        onClick={() => setIsFavorite(!isFavorite) }
      >{isFavorite ? 'Liked!' : 'like' }</button>
      <button 
        className="show-img-explanation" onClick={() => setShowExplanation(!showExplanation)}
      >{!showExplanation? '+' : '-'}</button>
      {showExplanation && 
        <p className='img-explanation'>
          {!explanation ? "No explanation available" : explanation}
        </p>
      }
    </div>
  );
}