const Bills = require('../models/Bills');
const billsControl = {
    createBills: (req, res) => {
        const bills = new Bill();
        bills.billType = req.body.type;
        bills.amount = req.body.amount;
        bills.duedate = req.body.duedate;
        bills.save(() => {
            if (err) {
                return res.status(500).json(err);
            } else {
                return res.status(200).json(bills);
            }
        });
    },
    updateBills: (req, res) => {
        Bills.findById(expenses.params.bills_id, (err, bills) => {
            if (err || !bills) {
                return res.status(404).json(err);
            }
            bills.billType = req.body.type;
            bills.amount = req.body.amount;
            bills.duedate = req.body.duedate;
            bills.save(() => {
                if (err) {
                    return res.status(500).json({ message: 'unable to update Bills details' });
                } else {
                    return res.status(200).json(bills);
                }
            });
        });
    },
     deleteBills: (req, res) => {
        Bills.remove({ _id: req.params.Bills_id, }, (err, bills) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.json(bills);
        });
    },
};
module.exports = billsControl;
    