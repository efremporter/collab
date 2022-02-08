const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateBeatInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.file = validText(data.file) ? data.file : '';

  if (!Validator.isLength(data.title, { min: 5, max: 140 })) {
    errors.title = 'Beat must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.file)) {
    errors.file = 'File field is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};