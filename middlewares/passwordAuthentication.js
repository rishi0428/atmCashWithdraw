
const logging           = require('./../logging/logging');
const authService       = require('./../services/authService');
const responses         = require('./../responses/responses');
const responseConstants = require('./../responses/responseConstants');

/**
 * middleware to authenticate user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const authenticateAccountPassword = (req, res, next) => {
  logging.log(req.apiReference, { EVENT: "authenticateAccountPassword input", reqBody: req.body });
  let authObj = {
    accountId: req.body.accountId,
    password  : req.body.password
  };

  const authResponse = authService.authenticateAccountPassword(authObj);
  if (authResponse.valid) {
    return next();
  }

  const resObj = {
    status    : responseConstants.responseStatus.UNAUTHORIZED,
    statusCode: responseConstants.responseStatus.UNAUTHORIZED,
    message   : responseConstants.responseMessages.INVALID_ACCESS
  };
  return responses.sendResponse(res, resObj);
};

module.exports = {authenticateAccountPassword};