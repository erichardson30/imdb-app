const imdbRoutes = require('./imdb_routes');

module.exports = function(app) {
    imdbRoutes(app);
}