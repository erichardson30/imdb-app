const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 9000;

const app = express();

require('./app/routes')(app, cors);
app.options('*', cors()); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(port, () => {
    console.log('listening on port : ' + port);
})