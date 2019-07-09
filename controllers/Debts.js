const Debts = require('../models/Debts');
const DebtsControl = {
    createDebts: (req, res) => {
        var Debts = new Debts();
        Debts.lender = req.body.lender;
        Debts.amount = req.body.amounts;
        Debts.duedate = req.body.duedate;
        Debts.save(() => {
            if (err) {
                return res.status(500).json(err)
            } else {
                return res.status(200).json(Debts)
            }
        });
    },
    updateDebts: (req, res) => {
        Debts.findById(req.params.Debts_id, (err, Debts) => {
            if (err || !Debts) {
                return res.status(404).json(err);
            }
            Debts.lender = req.body.lender;
            Debts.amount = req.body.amounts;
            Debts.duedate = req.body.duedate;

            Debts.save(() => {
                if (err) {
                    return res.status(500).json({ message: 'unable to update Debts details' });
                } else {
                    return res.status(200).json(Debts );
                }
            });
        });
    },
    deleteDebts: (req, res) => {
        Debts.remove({ _id: req.params.Debts_id, }, (err, Debts) => {
            if (err) {
                return res.status(500).json(err);

            }
            return res.json({ message: 'successfully deleted' });

        });
    },

};
module.exports = DebtsControl;
