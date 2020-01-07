const express = require('express');
const User = require('./user-model');

const router = express.Router();
const postRouter = require('../posts/post-router');

router.use('/:id/posts', postRouter);

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' });
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const userData = req.body;
    const newUser = await User.add(userData);
    res.status(201).json({ created: 'User Created' });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;

    const updated = await User.update(changes, id);
    if (count) {
      res.json({ update: count });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await User.remove(id);
    res.json({ removed: count });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
