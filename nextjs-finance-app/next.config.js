const dbConfig = require('./dbConfig');

module.exports = {
  reactStrictMode: true,
  env: {
    DATABASE_URL: `postgresql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`,
  },
};