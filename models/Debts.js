const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DebtsSchema = new Schema({

    lender: String,
    debtamount: Number,
    duedate: Date,
    


});
module.exports = mongoose.model(Debts, DebtsSchema);
