import { artistArray } from "../../assets/artists.js";
import { songsArray } from "../../assets/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((artist) => {
  const newArtistObj = { ...artist };
  delete newArtistObj.id;
  return newArtistObj;
});

const newSongsArray = songsArray.map((song) => {
  const newSongObj = { ...song };
  delete newSongObj.id;
  return newSongObj;
});

const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);
const responseSongs = await db.collection("songs").insertMany(newSongsArray);
