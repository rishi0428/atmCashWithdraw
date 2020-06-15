
const httpService = require('./../services/httpService');
const envProperties = require('./../properties/envProperties');
const startupService = require('./service/startupService');

/**
 * Initialises server and available accounts
 */
const initializeServer = async () => {
  await httpService.startHttpServer(envProperties.port);
  startupService.initializeAccounts();
};

module.exports = { initializeServer };