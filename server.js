const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const login = require('./login');
const mongoose = require('mongoose');
// mongoose.connect('mongodb://root:123456@ds233970.mlab.com:33970/userlist');
app.use(bodyParser.json());
const port = 8000;

app.use('/api', login);

app.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our home!' });
});

app.listen(port, () => { console.log(`server start on port ${port}`) })



