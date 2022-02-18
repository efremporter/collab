const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.title = 'Title must be between 2 and 140 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (!data.file || !data.file instanceof Object) {
    errors.file = 'File is invalid'
  }

  if (!data.file || !data.file instanceof Object) {
    errors.file = 'File is invalid'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};