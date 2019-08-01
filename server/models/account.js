const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const accountSchema = new Schema({
    Income: {
        salary: Number,
        recurring: Number,
        other: Number,
    },
    taxrate:Number,
    Tax: Number,
    balance:Number,
});
module.exports = mongoose.model('Account',accountSchema);
