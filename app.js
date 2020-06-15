let app = require('express')();
global.app = app;

// impoting modules, middlewares and initializing server
require('./middlewares');
require('./modules');
require('./startup').initializeServer();