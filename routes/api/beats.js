const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Beat = require('../../models/Beat');
const validateBeatInput = require('../../validation/beats');

router.get('/', (req, res) => {
  // console.log('request', req.body)
    Beat.find()
        .sort({ date: -1 })
        .then(beats => res.json(beats))
        .catch(err => res.status(404).json({ nobeatsfound: 'No beats found' }));
});

router.get('/user/:user_id', (req, res) => {
    Beat.find({user: req.params.user_id})
        .then(beats => res.json(beats))
        .catch(err =>
            res.status(404).json({ nobeatsfound: 'No beats found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Beat.findById(req.params.id)
        .then(beat => res.json(beat))
        .catch(err =>
            res.status(404).json({ nobeatsfound: 'No beat found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateBeatInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newBeat = new Beat({
        title: req.body.title,
        file: req.body.file,
        user: req.user.id
      });
  
      newBeat.save().then(beat => res.json(beat));
    }
  );

module.exports = router;