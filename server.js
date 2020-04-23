const express = require('express');
const app = express();
const router = require('./router/appRouting');

const hostname = '127.0.0.1';
const port = 3000;

// use static files
app.use('/public',express.static('public'));

// Application Routing
router.mapRoutes(app);

app.listen(port,hostname, () => {
    console.log(`server is Started at http://${hostname}:${port}`);
});
