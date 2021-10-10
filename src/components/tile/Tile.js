import React from 'react';

export const Tile = ({ data }) => {
  const values = Object.values(data);
  return (
    <div className='tile-container'>
      {values.map((v, i) => {
        return (
          <p key={i} className={i === 0 ? 'tile-title' : 'tile'}>
            {v}
          </p>
        );
      })}
      <hr />
    </div>
  );
};
