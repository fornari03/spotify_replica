import React, { use } from "react";
import SongItem from "../components/SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [numberItems, setItems] = useState(5);
  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < numberItems)
        .map((song, index) => (
          <SongItem key={index} index={index} {...song} />
        ))}
      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(numberItems + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
