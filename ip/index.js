const dns = require('dns');
const pcname = require('os').hostname();

function getLocalIp(callback) {
  dns.lookup(pcname, (error, address, family) => {
    callback(address);
  });
}

module.exports = {
  getLocalIp
};
