const imdbRoutes = require('./imdb_routes');

module.exports = function(app, cors) {
    imdbRoutes(app, cors);
}