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
    <div className="SpaceCard">
      {title}
      {date}
      {url}
      {explanation}
    </div>
  );
}