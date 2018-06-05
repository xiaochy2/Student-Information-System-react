const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const login = require('./login');
const router = require('./router');
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:a123456@ds247830.mlab.com:47830/smsystem');
app.use(bodyParser.json());
const port = 8000;

app.use('/api', login);
app.use('/api', router);

app.get('/', (req, res) => {
    res.json({ message: 'hello! welcome to our home!' });
});

app.listen(port, () => { console.log(`server start on port ${port}`) })



