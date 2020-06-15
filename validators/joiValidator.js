const Joi = require('joi');

const logging   = require('./../logging/logging');
const responses = require('./../responses/responses');

/**
 * common function for validating schema
 * @param {*} apiReference 
 * @param {*} param1 {req, body, res, schema}
 */
const validateFields = (apiReference, {req, body, res, schema}) => {
  logging.log(apiReference, {REQUEST_BODY: body});
  let validation = Joi.validate(body, schema);
  if (validation.error) {
    let errorReason = validation.error.details ? validation.error.details[0].message : 'Parameter missing or parameter type is wrong';
    logging.log(apiReference, validation.error.details);
    responses.parameterMissingResponse(res, errorReason);
    return false;
  }
  return true;
};

exports.validateFields = validateFields;