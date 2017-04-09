const imdb = require('imdb-api');

module.exports = function(app) {
    app.get('/search', (req, res) => {
        imdb.get(req.query.title, (err, response) => {
            if(err) res.send(err);
            if(isMovie(response)) {
                res.json(response);
            } else {
                response.episodes((err, episodes) => {
                    if(err) res.send(err);
                    let jsonString = JSON.stringify(episodes);
                    res.json(jsonString);
                });
            }
        })
    })
}
 const isMovie = function(obj) {
    if(obj.episodes) {
        return false;
    } else {
        return true;
    }
 }