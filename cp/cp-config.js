const promisify = require('util').promisify;
const ncp = require('copy-paste');

const cp = {
  copy: promisify(ncp.copy),
  paste: promisify(ncp.paste)
};

module.exports = cp;