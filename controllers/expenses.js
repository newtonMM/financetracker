const expenses = require('../models/expenses');
const ExpensesControl = {

    createExpenses: (req, res) => {
        var expenses = new expenses();
        expenses.daily = req.body.dailyexpenses;
        expenses.dailyamount = req.body.dailyamount;
        expenses.weekly = req.body.weeklyexpenses;
        expenses.weeklyamount = req.body.weeklyamount;
        expenses.monthly = req.body.monthlyexpenses;
        expenses.annual = req.body.annualexpenses;
        expenses.annualamount = req.body.annualamount;

        expenses.save(() => {
            if (err) {
                return res.status(500).json({ message: 'unable to save expenses details' });
            } else {
                return res.status(200).json(expenses);
            }
        });
    },
    updateExpenses: (req, res) => {
        expenses.findById(expenses.params.expenses_id, (err, account) => {
            if (err || !expenses) {
                return res.status(404).json(err);
            }
            expenses.daily = req.body.dailyexpenses;
            expenses.dailyamount = req.body.dailyamount;
            expenses.weekly = req.body.weeklyexpenses;
            expenses.weeklyamount = req.body.weeklyamount;
            expenses.monthly = req.body.monthlyexpenses;
            expenses.annual = req.body.annualexpenses;
            expenses.annualamount = req.body.annualamount;

            expenses.save(() => {
                if (err) {
                    return res.status(500).json({ message: 'unable to update expenses details' });
                } else {
                    return res.status(200).json(expenses);
                }
            });



        });
    },

    deleteExpenses: (req, res) => {
        expenses.remove({ _id: req.params.expenses_id, }, (err, expenses) => {
            if (err) {
                return res.status(500).json(err);

            }
            return res.json(expenses);

        });


    },


};
    module.exports = ExpensesControl;