const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const billsSchema = new Schema({

    billType: { type: String, required: true },
    amount: { type: Number, required: true },
    duedate: Date ,

});
module.exports = mongoose.model('Bills', billsSchema);
