
exports.responseHttpStatus = {
  BAD_REQUEST          : 400,
  UNAUTHORIZED         : 401,
  SUCCESS              : 200,
  INTERNAL_SERVER_ERROR: 500
};

exports.responseStatus = {
  BAD_REQUEST          : 400,
  UNAUTHORIZED         : 401,
  SUCCESS              : 200,
  INTERNAL_SERVER_ERROR: 500,
};

exports.responseMessages = {
  SUCCESS              : "success",
  PARAMETER_MISSING    : "Insufficient information was supplied. Please check and try again.",
  INVALID_AUTH_KEY     : "Invalid secret",
  INTERNAL_SERVER_ERROR: "Some error occurred.",
  INVALID_AMOUNT       : "Not a valid withdrawl amount",
  INVALID_DENOMINATION : "Not a valid withdrawl denomination",
  LOW_BALANCE          : "Low Account balance",
  INVALID_ACCESS       : "Invalid access"
};