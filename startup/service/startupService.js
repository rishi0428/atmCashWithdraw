
const config = require("config");
global.ACCOUNTS = {};

/**
 * function to initialize all available accounts and holding into a variable named ACCOUNTS
 * ACCOUNTS is an object with contains key name as accountId and value as object containing details of the account
 */
const initializeAccounts = ()=>{
  config.users.forEach(element => {
    global.ACCOUNTS[element.accountId] = {password : element.password, balance : element.balance};
  });
}

module.exports = {initializeAccounts}