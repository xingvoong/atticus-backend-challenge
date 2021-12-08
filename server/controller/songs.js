const model = require('../model');

module.exports = {

  getSongByName: (req, res) => {
    const {songname} = req.params;
    model.songs.getSongByName(songname)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  },

  createSong: (req, res) => {
    const {name, genre, artist, length, file_path} = req.body;
    model.songs.createSong([name, genre, artist, length, file_path])
    .then(res.status(200).send(`create a song named ${name}`))
    .catch((err) => { res.status(404).send(err); });
  },

  deleteSong: (req, res) => {
    const {songname} = req.params;
    model.songs.deleteSong(songname)
    .then(res.status(200).send(`delete a song named: ${songname}`))
    .catch((err) => { res.status(404).send(err); });
  },

  updateSong: (req, res) => {
    const {name, ranking} = req.body
    model.songs.updateSong(name, ranking)
    .then(res.status(200).send(`update a song named: ${name} with ranking ${ranking}`))
    .catch((err) => { res.status(404).send(err); });
  }
};
