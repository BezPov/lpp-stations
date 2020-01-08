module.exports = function (server) {
    require('./stationRoutes')(server);

    require('./infoRoutes')(server);
    require('./healthRoutes')(server);
    require('./metricsRoutes')(server);
};