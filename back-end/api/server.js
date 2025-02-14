import express from "express";
import { artistArray } from "../../front-end/assets/database/artists.js";
import { songsArray } from "../../front-end/assets/database/songs.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/artists", (req, res) => {
  res.send(artistArray);
});

app.get("/songs", (req, res) => {
  res.send(songsArray);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
