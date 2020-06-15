
const _                 = require("underscore");
const logging           = require('./../../../logging/logging');
const responses         = require('./../../../responses/responses');
const withdrawalService = require('./../services/withdrawalService');
const responseConstants = require('./../../../responses/responseConstants');

/**
 * 
 * controller for withdraw cash
 * @param {*} req 
 * @param {*} res 
 */
const withdrawCash = (req, res) => {
  let apiReference  = req.apiReference;
  try {
    const {amount, denomination, accountId} = req.body;
    // amount must be in multiple of 10
    if(amount%10 != 0){
      throw new Error(responseConstants.responseMessages.INVALID_AMOUNT);
    }
    // preferred denomination must not be greater than withdrawl amount
    if(denomination> amount){
      throw new Error(responseConstants.responseMessages.INVALID_DENOMINATION);
    }
    //withdrawl amount must not be greater than the available balance
    if(amount > ACCOUNTS[accountId].balance){
      logging.log(apiReference, {ERROR : "LOW BALANCE", AVAILABLE_BALANCE : ACCOUNTS[accountId].balance})
      throw new Error(responseConstants.responseMessages.LOW_BALANCE);
    }
    //calling function will return object having keys as note amount and value as count of respective notes
    const withdrawalResponse = withdrawalService.withdrawCash(apiReference, {amount, preference : denomination});
    logging.log(apiReference, {EVENT : "withdrawalResponse", withdrawalResponse});
    // empty object means requested amount is not valid
    if(_.isEmpty(withdrawalResponse)){
      throw new Error(responseConstants.responseMessages.INVALID_AMOUNT);
    }
    // debiting withdrawn amount from balance
    ACCOUNTS[accountId].balance -= amount;
    return responses.success(res, withdrawalResponse);
  } catch (error) {
    logging.logError(apiReference, {EVENT: "withdrawCash ERROR", ERROR: error.toString()});
     responses.sendResponse(res, {message : error.message, status : responseConstants.responseStatus.INTERNAL_SERVER_ERROR, statusCode : responseConstants.responseStatus.INTERNAL_SERVER_ERROR});
  }
};

module.exports = {withdrawCash};