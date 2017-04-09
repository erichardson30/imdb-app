const express = require('express');
const port = process.env.PORT || 9000;

const app = express();

app.listen(port, () => {
    console.log('listening on port : ' + port);
})