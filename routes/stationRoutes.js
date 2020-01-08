const StationApi = require('../api/stationApi');

const initRoutes = function (server) {
    server.get('/', async function (req, res, next) {
        const selector = {};

        const options = {
            skip: 0,
            limit: 20
        };

        if (req.query) {
            if (req.query.q) {
                selector.name = {
                    '$regex': req.query.q,
                    '$options' : 'i'
                }
            }

            if (req.query.skip) options.skip = parseInt(req.query.skip);

            if (req.query.limit) options.limit = parseInt(req.query.limit);
        }

        const fetchedStations = await StationApi.findMany(selector, options);

        res.json({
            success: true,
            skip: options.skip,
            limit: options.limit,
            data: fetchedStations
        });

        return next();
    });

    server.post('/', async function (req, res, next) {
        const createdStation = await StationApi.create(req.body);

        if (createdStation) {
            res.json({
                success: true,
                data: createdStation
            });
        } else {
            res.json(500, {
                success: false
            });
        }

        return next();
    });

    server.get('/:stationId', async function (req, res, next) {
        const fetchedStation = await StationApi.findOne({ stationId: req.params.stationId });

        if (fetchedStation) {
            res.json({
                success: true,
                data: fetchedStation
            });
        } else {
            res.json(500, {
                success: false,
                message: 'Station not found'
            });
        }

        return next();
    });
};

module.exports = initRoutes;