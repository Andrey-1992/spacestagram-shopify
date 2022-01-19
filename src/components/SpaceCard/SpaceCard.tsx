import React from 'react';
import './SpaceCard.css';
interface Props {
  key?: number
  title?: string
}

export const SpaceCard: React.FC<Props> = ({ key, title }) => {
  return (
    <div className="SpaceCard">
      {title}
    </div>
  );
}