const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateBeatInput(data) {
  let errors = {};
  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.title = 'Beat title must be between 2 and 140 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  
  if (!data.file || !data.file instanceof Object) {
    errors.file = 'File is invalid'
  }
  
  if (data.file && data.file instanceof Object) {
    let mp3 = data.file.originalname
    mp3 = mp3.slice(mp3.length - 4)
    if (mp3 !== '.mp3') {
      errors.file = 'File must be .mp3 or .wav'
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};