const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  
  if(username && password) const user = new User({username, password});
  else res.send('Please input a username and password..');
  const user = new User({ username, password });

  user.save().then(savedUser => {
    res.send('User is saved');
  }).catch(err => {
    res.send('Error at createUser in user.js');
  });
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
};

module.exports = {
  createUser
};
