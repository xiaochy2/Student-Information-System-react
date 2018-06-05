const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const userSchema   = new Schema({
    username: String,
    password: String,
    role:Number
},{collection:'user'});

module.exports = mongoose.model('User', userSchema);