const db = require('../data/db-config.js');

function find() {
  return db('users').select();
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function add(user) {
  return db('users').insert(userData);
}

function update(user, id) {
  return db('users')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('users')
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};
