
const constants = require('./responseConstants');

const parameterMissingResponse = (res, err, data) => {
  let response = {
    message: err || constants.responseMessages.PARAMETER_MISSING,
    status : constants.responseStatus.BAD_REQUEST,
    data   : data || {}
  };
  res.status(constants.responseHttpStatus.BAD_REQUEST).send(JSON.stringify(response));
};

const success = (res, data) => {
  let response = {
    message: constants.responseMessages.SUCCESS,
    status : constants.responseStatus.SUCCESS,
    data   : data || {}
  };
  res.json(response);
};

const sendResponse = (res, data) => {
  let response = {
    message: data.message,
    status : data.status,
    data   : data.body || {}
  };
  res.json(response);
};

module.exports = {
  parameterMissingResponse,
  success,
  sendResponse
}