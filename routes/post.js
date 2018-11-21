const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/Post.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Post.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE POST BY ID */
router.get('/:id', function(req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE POST */
router.post('/', function(req, res, next) {
  Post.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPVOTE POST */
router.get('/upvote/:id', function(req, res, next) {
  Post.where({ _id: req.params.id })
     .update({ $inc: { votes: 1 }}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });

});

/* DOWNVOTE POST */
router.get('/downvote/:id', function(req, res, next) {
  Post.where({ _id: req.params.id })
     .update({ $inc: { votes: -1 }}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });

});

/* UPDATE POST */
router.put('/:id', function(req, res, next) {
  Post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE POST */
router.delete('/:id', function(req, res, next) {
  Post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
