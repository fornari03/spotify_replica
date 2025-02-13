import React from "react";
import SongItem from "../components/SongItem";

const SongList = ({ songsArray }) => {
  const numberItems = 5;
  return (
    <div className="song-list">
      {songsArray.filter((currentValue, index) => index < numberItems).map((song, index) => (
        <SongItem key={index} index={index} {...song} />
      ))}
      <p className="song-list__see-more">Ver mais</p>
    </div>
  );
};

export default SongList;
