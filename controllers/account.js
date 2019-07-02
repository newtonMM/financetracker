const account = require('../models/account');
const User = require('../models/user');
const Usercontrol = require('./user');

const accountcontrol = {


    createincome: (req, res) => {
        var income = new income();
        account.Income.salary = req.body.salary;
        account.Income.recurring = req.body.recurringincome;
        account.Income.other = req.body.otherincome;
        account.Income.save(() => {
            if (err) {
                return res.status(500).json({ message: 'unable to save income details' });

            } else {
                return res.status(200).json(Income);
            }

        });
    },

    createexpenses: (req, res) => {
        var expenses = new expenses();
        account.expenses.daily = req.body.dailyexpenses;
        account.expenses.dailyamount = req.body.dailyamount;
        account.expenses.weekly = req.body.weeklyexpenses;
        account.expenses.weeklyamount = req.body.weeklyamount;
        account.expenses.monthly = req.body.monthlyexpenses;
        account.expenses.annual = req.body.annualexpenses;
        account.expenses.annualamount = req.body.annualamount;

        account.expenses.save(() => {
            if (err) {
                return res.status(500).json({ message: 'unable to save expenses details' });
            } else {
                return res.status(200).json(expenses);
            }
        });
    },
    createBills: (req, res) => {
        var Bills = new Bill();
        account.Bills.billtype = req.body.type;
        account.Bill.amount = req.body.amount;
        account.Bill.duedate = req.body.duedate;
        account.Bills.save(() => {
            if (err) {
                return res.status(500).json(err)
            } else {
                return res.status(200).json(Bills)

            }
        });
    },

    createDebts: (req, res) => {
        var Debts = new Debts();
        account.Debts.lender = req.body.lender;
        account.Debts.amount = req.body.amounts;
        account.Debts.duedate = req.body.duedate;

        account.debts.save(() => {
            if (err) {
                return res.status(500).json(err)
            } else {
                return res.status(200).json(Debts)
            }
        });
    },



};

module.exports = accountcontrol;
