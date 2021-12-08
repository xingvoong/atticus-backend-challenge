const pool = require('../db');

const getSongByName = async (songname) => {
  const params = [songname]
  const client = await pool.connect();
  const query = 'select * from songs where name = $1';

  try {
    return await client.query(query, params);
  } catch (err) {
    return err
  } finally {
    client.release();
  }
};

const createSong = async (body) => {
  const params = body
  const client = await pool.connect();
  const query = 'insert into songs (name, genre, artist, length, file_path) values ($1, $2, $3, $4, $5)';

  console.log(query)
  try {
    return await client.query(query, params);
  } catch (err) {
    return err
  } finally {
    client.release()
  }
};

const deleteSong = async (songname) => {
  const params = [songname]
  const client = await pool.connect();
  const query = 'delete from songs where name = $1';

  try {
    return await client.query(query, params);
  } catch (err) {
    return err
  } finally {
    client.release()
  }
};

const updateSong = async (name, ranking) => {
  const params = [name, ranking]
  const client = await pool.connect();
  const query = 'update songs set ranking = $2 where name = $1'

  try {
    return await client.query(query, params);
  } catch (err) {
    return err
  } finally {
    client.release()
  }
}

module.exports = {
  getSongByName, createSong, deleteSong, updateSong
};