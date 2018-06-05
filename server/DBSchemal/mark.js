const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const markSchema   = new Schema({
    stuId: Object,
    username:String,
    English: Number,
    Eath:Number,
    Ehysics:Number
},{collection:'mark'});

module.exports = mongoose.model('Mark', markSchema);