const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema({
    
        daily: String,
        dailyamount: Number,
        weekly: String,
        weeklyamount: Number,
        monthly: String,
        monthlyamount: Number,
        annualy: String,
        annualyamount: Number,

    
});
module.exports = mongoose.models(Expenses, ExpensesSchema);


