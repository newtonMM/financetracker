const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const accountSchema = new Schema({
    Income: {
        salary: Number,
        recurring: Number,
        other:Number,


    },
    expenses: {
        daily: String,
        dailyamount:Number,
        weekly: String,
        weeklyamount:Number,
        monthly: String,
        monthlyamount:Number,
        annualy: String,
        annualyamount:Number,

       },
        
    Bills: {
        Billtype: {type:String, required: true},
        amount: {type:Number, required: true},
        duedate: {type:Date},
        

    },
    Debts: {
        lender: {type:String, required: true},
        debtamount: {type:Number, required: true},
        duedate: {type:Date},

    },
    Tax: Number,
    checks:String,





});
module.exports = mongoose.model(account,accountSchema);
