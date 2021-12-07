const model = require('../model');

module.exports = {
  getAllUsers: (req, res) => {
    model.users.getAllUsers()
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  },

  getUserByName: (req, res) => {
    const {username} = req.params;
    model.users.getUserByName(username)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  },

  getUserById: (req, res) => {
    const {userID} = req.params;
    model.users.getUserByID(userID)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  },

  createUser: (req, res) => {
    const {id, username, user_email} = req.body;
    model.users.createUser([id, username, user_email])
    .then(res.status(200).send(`create a new user with id: ${id}, username: ${username}, user_email: ${user_email}`))
    .catch((err) => { res.status(404).send(err); });
  },

  deleteUser: (req, res) => {
    const {appointment_id, doctor_id} = req.params;
    // console.log("appointment_id", appoinment_id)
    // console.log("doctor_id", doctor_id)
    model.users.deleteUser(appointment_id, doctor_id)
    .then(res.status(200).send(`delete a user with appointment_id: ${appointment_id}`))
    .catch((err) => { res.status(404).send(err); });
  }
};
