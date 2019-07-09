const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AccountSchema = new Schema({
    Income: {
        salary: Number,
        recurring: Number,
        other: Number,
    },
        Tax: Number,

});
module.exports = mongoose.model(Account,AccountSchema);
