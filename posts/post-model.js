const db = require('../data/db-config.js');

function find(id) {
  return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .where({ user_id: id })
    .select('p.id', 'p.contents', 'u.username');
}

module.exports = {
  find,
};
