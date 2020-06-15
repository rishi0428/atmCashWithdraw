
const md5 = require('md5');

/**
 * function to validate account and its password
 * @param {*} param0 { accountId, password }
 */
const authenticateAccountPassword = ({ accountId, password }) => {
  const authResponse = { valid: false };
  // if account exists and password matches then true else false
  if (ACCOUNTS[accountId] && md5(password) == ACCOUNTS[accountId].password) {
      authResponse.valid = true;
      return authResponse;
  }
  return authResponse;
};

module.exports = { authenticateAccountPassword }