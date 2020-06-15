const Joi = require('joi');

/**
 * base joi schema
 */
const baseJoiObject = () => {
  return Joi.object().keys ({
    accountId: Joi.string().length(6).required(),
    password : Joi.string().length(4).required(),
  });
};

module.exports = {baseJoiObject};
