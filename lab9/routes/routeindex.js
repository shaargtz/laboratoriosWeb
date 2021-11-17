const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const blogPost = require('../model/post');

router.get('/', async (req,res) => {
  const posts = await blogPost.find();
  res.render('index', { posts });
});

router.get('/newPost', async (req,res) => {
  res.render('newPost');
});

router.get('/editPost/:id', async (req, res) => {
  const post = await blogPost.findById( req.params.id );
  res.render('edit', { post });
});

router.get('/deletePost/:id', async (req, res) => {
  const post = await blogPost.findById( req.params.id );
  res.render('delete', { post });
});

router.post('/newPost', async (req, res) => {
  const newPost = new blogPost({
      title: req.body.title,
      author: req.body.author,
      post_date: Date.now(),
      post_data: req.body.post_data,
  });
  await newPost.save();
  res.redirect('/');
})

router.post('/editPost/:id', async (req, res) => {
  const filter = { _id: req.params.id };
  const update = {
      title: req.body.title,
      author: req.body.author,
      post_data: req.body.post_data,
  }

  let post = await blogPost.findOneAndUpdate(filter, update, {
      new: true
  });

  setTimeout(() => {}, 1000);
  res.redirect('/');
})

router.post('/deletePost/:id', async (req, res) => {
  const filter = { _id: req.params.id };
  blogPost.deleteOne(filter, function(err) {
    if (err) return handleError(err);
  });

  setTimeout(() => {}, 1000);
  res.redirect('/');
})

module.exports = router;