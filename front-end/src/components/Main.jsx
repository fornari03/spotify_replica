import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {/* ItemList de artistas */}
      {type === "artists" || !type ? (
        <ItemList
          title="Artistas"
          items={5}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}
      {/* Item List de músicas */}
      {type === "songs" || !type ? (
        <ItemList
          title="Músicas"
          items={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
