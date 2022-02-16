const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Comment = require('../../models/Comment');
const validateCommentInput = require('../../validation/comment');
const { uploadFile, getFileStream } = require('../../s3')
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

router.get('/:beat_id', (req, res) => {
  // console.log('get here')
  Comment.find({beat: req.params.beat_id})
    .sort({ date: -1 })
    .then(comments => {
      // const key = comments[0].file
      // const readStream = getFileStream(key)
      // readStream.pipe(res)
      res.json(comments) 
    })
    .catch(err =>
        res.status(404).json({ nocommentsfound: 'No comments found from that user' }
    )
    );
  });
    
router.get('/stream/:id', (req, res) => {
      const key = req.params.id
      const readStream = getFileStream(key)
      readStream.pipe(res)
      // res.json(beat)
});

router.delete('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => comment.remove())
    .then(res.json('Success'))
    .catch(err =>
        res.status(404).json({ nocommentsfound: 'No comment found with that ID' })
    );
});


const app = express();

router.post('/', passport.authenticate('jwt', { session: false }), upload.single('file'), (req, res) => {
      const input = {file: req.file, title: req.body.title, user: req.user, beat: req.body.beat};
      const { errors, isValid } = validateCommentInput(input);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const file = req.file;
      uploadFile(file)
      .then(response => {
        let commentUrl = response.Key
        const newComment = new Comment({
          title: req.body.title,
          file: commentUrl,
          user: req.user.id,
          beat: req.body.beat
      });
        newComment.save().then(comment => res.json(comment));
        unlinkFile(file.path)
      })
    }
  );

module.exports = router;