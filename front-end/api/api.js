import axios from "axios";

const port = import.meta.env.VITE_PORT || 3000;
const URL = `http://localhost:${port}`;

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
