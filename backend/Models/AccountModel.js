const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AccountSchema = new Schema({
        email : String,
        password : String,
    }
    ,
{
    versionKey: false
});


module.exports = mongoose.model('account', AccountSchema);