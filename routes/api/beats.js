const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Beat = require('../../models/Beat');
const validateBeatInput = require('../../validation/beats');
const { uploadFile, getFileStream } = require('../../s3')

router.get('/', (req, res) => {
    Beat.find()
      .sort({ date: -1 })
      .then(beats => {
        res.json(beats)
      })
        
      .catch(err => res.status(404).json({ nobeatsfound: 'No beats found' }));
});

router.get('/:user_id', (req, res) => {
    Beat.find({user: req.params.user_id})
      .sort({ date: -1 })
      .then(beats => {
        // const key = beats[0].file
        // const readStream = getFileStream(key)
        // readStream.pipe(res)
        res.json(beats) 
      })
      .catch(err =>
          res.status(404).json({ nobeatsfound: 'No beats found from that user' }
      )
      );
    });
    
router.get('/stream/:id', (req, res) => {
      // console.log(beat)
      const key = req.params.id
      const readStream = getFileStream(key)
      readStream.pipe(res)
      // res.json(beat)
});

router.delete('/:id', (req, res) => {
  Beat.findById(req.params.id)
    .then(beat => beat.remove())
    .then(res.json('Success'))
    .catch(err =>
        res.status(404).json({ nobeatsfound: 'No beat found with that ID' })
    );
});


const app = express();

router.post('/', passport.authenticate('jwt', { session: false }), upload.single('file'), (req, res) => {
      console.log('HERE')
      const input = {file: req.file, title: req.body.title, user: req.user};
      const { errors, isValid } = validateBeatInput(input);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const file = req.file;
      uploadFile(file)
      .then(response => {
        console.log(response.Location)
        let beatUrl = response.Key
  
        const newBeat = new Beat({
          title: req.body.title,
          file: beatUrl,
          user: req.user.id,
      });
        newBeat.save().then(beat => res.json(beat));
      })
    }
  );

module.exports = router;