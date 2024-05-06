const express = require('express');

const app = express();
const port = 8080;

// serve static files from the public folder
app.use(express.static('public'));

// start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});