import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../../assets/database/songs";
import { artistArray } from "../../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const songObj = songsArray.filter((song) => song._id === id)[0];

  const artistObj = artistArray.filter(
    (artist) => artist.name === songObj.artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (song) => song.artist === songObj.artist
  );

  const songIndex = songsArrayFromArtist.findIndex(
    (song) => song._id === songObj._id
  );

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={songObj.image} alt={`Imagem da música ${songObj.name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artistObj.name}`}
          />
        </Link>

        <Player
          songsArrayFromArtist={songsArrayFromArtist}
          songIndex={songIndex}
          duration={songObj.duration}
        />

        <div>
          <p className="song__name">{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
