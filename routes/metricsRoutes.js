const initRoutes = function (server) {
    server.get('/metrics', function (req, res, next) {
        const serviceName = process.env.npm_package_name;

        axios.get('lpp-account-service', {  })
            .then(response => {
                console.log(response);

                res.json(response.data);

                return next();
            })
            .catch(error => {
                res.send(500, error);

                return next();
            });


        return next();
    });
};

module.exports = initRoutes;