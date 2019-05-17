const proxy = require('http-proxy-middleware');

module.exports = function(app) {
app.use(proxy('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/'));
};

