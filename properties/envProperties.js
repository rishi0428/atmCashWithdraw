
const config = require('config');

const isEnv = (env) => {
  return process.env.NODE_ENV == env;
}

const isEnvLive = () => {
  return isEnv('production');
}

const getEnv = () => {
  return process.env.NODE_ENV;
}

const port = config.get('PORT');

module.exports = {
  isEnv,
  getEnv,
  isEnvLive,
  port
}
