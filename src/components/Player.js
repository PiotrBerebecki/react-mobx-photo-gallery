import React from 'react';

const Player = ({ selectedTileId }) => (
  <section>
    <img
      className="player"
      src={`http://via.placeholder.com/500x300?text=Rail-${selectedTileId}`}
      alt="selected tile"
    />
  </section>
);

export default Player;
