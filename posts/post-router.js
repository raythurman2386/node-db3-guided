const postRouter = require('express').Router({ mergeParams: true });
const Posts = require('./post-model.js');

postRouter.get('/', async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts = await Posts.find(id);
    return res.json(posts);
  } catch (error) {
    next(error);
  }
});

module.exports = postRouter;
