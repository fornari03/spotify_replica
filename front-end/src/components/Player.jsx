import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const Player = ({ duration, songsArrayFromArtist, songIndex, audio }) => {
  const audioPlayer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player">
      <div className="player__controllers">
        <Link
          to={`/song/${
            songsArrayFromArtist[songIndex - 1]
              ? songsArrayFromArtist[songIndex - 1]._id
              : songsArrayFromArtist[songsArrayFromArtist.length - 1]._id
          }`}
        >
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />

        <Link
          to={`/song/${
            songsArrayFromArtist[songIndex + 1]
              ? songsArrayFromArtist[songIndex + 1]._id
              : songsArrayFromArtist[0]._id
          }`}
        >
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>00:00</p>

        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
