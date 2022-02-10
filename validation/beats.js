const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateBeatInput(data) {
  let errors = {};
  console.log(data.file)
  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 2, max: 140 })) {
    errors.title = 'Beat title must be between 2 and 140 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (!data.file || !data.file instanceof Object) {
    console.log('data', data.file)
    errors.file = 'File is invalid'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};