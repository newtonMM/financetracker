const Debts = require('../models/Debts');
const debtsControl = {
    createDebts: (req, res) => {
        const debts = new Debts();
        debts.lender = req.body.lender;
        debts.amount = req.body.amounts;
        debts.duedate = req.body.duedate;
        debts.save(() => {
            if (err) {
                return res.status(500).json(err)
            } else {
                return res.status(200).json(Debts)
            }
        });
    },
    updateDebts: (req, res) => {
        Debts.findById(req.params.debts_id, (err, debts) => {
            if (err || !Debts) {
                return res.status(404).json(err);
            }
            debts.lender = req.body.lender;
            debts.amount = req.body.amounts;
            debts.duedate = req.body.duedate;

            debts.save(() => {
                if (err) {
                    return res.status(500).json({ message: 'unable to update Debts details' });
                } else {
                    return res.status(200).json(Debts );
                }
            });
        });
    },
    deleteDebts: (req, res) => {
        Debts.remove({ _id: req.params.debts_id, }, (err, Debts) => {
            if (err) {
                return res.status(500).json(err);

            }
            return res.json({ message: 'successfully deleted' });

        });
    },

};
module.exports = debtsControl;
