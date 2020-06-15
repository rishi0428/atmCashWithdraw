

const apiReferenceModule = "atm";
const Joi                = require('Joi');

const validator               = require('./../../../validators/joiValidator');
const baseSchema              = require('./../../../validators/baseSchema');
const cashWithdrawalConstants = require('./../constants/withdrawalConstants');


/**
 * validator for withdrawl request
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const validateWithdrawal = (req, res, next) => {
  req.apiReference = {
    module: apiReferenceModule,
    api   : "withdraw"
  };
  //extending base validator
  let schema = baseSchema.baseJoiObject().keys({
    //amount must be of type number and minimum 10
    amount      : Joi.number().required().min(10),
    //denomination must be of number and should be one of available notes
    denomination: Joi.number().valid(cashWithdrawalConstants.CURRENCY_NOTES_VALUES).optional()
  });
  // validating schema, if valid called next()
  validator.validateFields(req.apiReference, {req, body : req.body, res, schema}) ? next() : 0;
};

module.exports = {validateWithdrawal};