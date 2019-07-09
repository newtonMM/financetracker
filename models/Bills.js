const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BillsSchema = new Schema({

    Billtype: { type: String, required: true },
    amount: { type: Number, required: true },
    duedate: Date ,

});
module.exports = mongoose.model(Bills, BillsSchema);
