const imdb = require('imdb-api');

// searches IMDB for a title and returns a movie or formats the episode data for TV shows
module.exports = function(app) {
    app.get('/search', (req, res) => {
        imdb.get(req.query.title, (err, response) => {
            if(err) res.send(err);
            if(isMovie(response)) {
                const obj = {
                    type: 'movie',
                    data: response
                }
                res.json(obj);
            } else {
                response.episodes((err, episodes) => {
                    if(err) res.send(err);
                    const obj = {
                        type: 'tv',
                        data: episodes
                    }
                    res.json(obj);
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