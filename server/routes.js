const router = require('express').Router();
const controller = require('./controller');

router.get('/', (req, res) => {
  res.send('Hello World');
});


router.get('/songs/:songname', controller.songs.getSongByName);

router.post('/songs/create', controller.songs.createSong);

router.delete('/songs/delete/:songname', controller.songs.deleteSong);

router.patch('/songs/update', controller.songs.updateSong);

module.exports = router;