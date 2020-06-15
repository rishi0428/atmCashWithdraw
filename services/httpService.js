const http = require('http');

/**
 * initialises express server
 * @param {*} port 
 */
const startHttpServer = (port) => {
  return new Promise((resolve) => {
    http.createServer(app).listen(port, function () {
      console.error("SERVER RUNNING AT PORT-", app.get('port'), "ENV-", app.get('env'));
      return resolve();
    });
  });
};

module.exports = {startHttpServer};