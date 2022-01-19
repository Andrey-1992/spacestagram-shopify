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
      <a href={url} target="_blank">
        <img className='space-image' src={!url ? "No photo available" : url} alt={title}/>
      </a>
      <h2 className='img-text'>{!title ? "No title available" : title}</h2>
      <h3 className='img-text'>{!date ? "No date available" : date}</h3>
      <button
        className='like-button'
        onClick={() => setIsFavorite(!isFavorite) }
      >{isFavorite ? 'Liked!' : 'Like' }</button>
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