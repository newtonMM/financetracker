const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const debtsSchema = new Schema({

    lender: String,
    debtamount: Number,
    duedate: Date,
   
});
module.exports = mongoose.model('Debts', debtsSchema);
