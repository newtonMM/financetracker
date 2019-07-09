const Bills = require('../models/Bills');
const BillsControl = {
    createBills: (req, res) => {
        var Bills = new Bill();
        Bills.billtype = req.body.type;
        Bills.amount = req.body.amount;
        Bills.duedate = req.body.duedate;
        Bills.save(() => {
            if (err) {
                return res.status(500).json(err);
            } else {
                return res.status(200).json(Bills);
            }
        });
    },
    updateBills: (req, res) => {
        Bills.findById(expenses.params.Bills_id, (err, Bills) => {
            if (err || !Bills) {
                return res.status(404).json(err);
            }
            Bills.billtype = req.body.type;
            Bills.amount = req.body.amount;
            Bills.duedate = req.body.duedate;
            Bills.save(() => {
                if (err) {
                    return res.status(500).json({ message: 'unable to update Bills details' });
                } else {
                    return res.status(200).json(Bills);
                }
            });
        });
    },
     deleteBills: (req, res) => {
        Bills.remove({ _id: req.params.Bills_id, }, (err, Bills) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.json(Bills);
        });
    },
};
module.exports = BillsControl;
    