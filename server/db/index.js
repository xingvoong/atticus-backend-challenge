const { Pool } = require('pq');
const {
  user, password, host, database, port,
} = require('../config');

const pool = new Pool({
  user,
  password,
  host,
  database,
  port,
});

pool.connect((err) => {
  if (err) {
    console.log('Error connecting to database', err);
  } else {
    console.log('Connected to database!');
  }
})

module.exports = pool;
