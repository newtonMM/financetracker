const account = require('../models/account');
const User = require('../models/user');
const Usercontrol = require('./user');

const AccountControl = {


    createAccount: (req, res) => {
        var account = new account();
        account.Income.salary = req.body.salary;
        account.Income.recurring = req.body.recurringincome;
        account.Income.other = req.body.otherincome;
        account.taxrate = req.body.taxrate;
        const Tax = (taxrate * salary);
        if (err) {
            return res.status(500).json(err);
        }
        return Tax;

        account.save(() => {
            if (err) {
                return res.status(500).json({ message: 'unable to save income details' });

            } else {
                return res.status(200).json(account);
            }

        });
    },

    updateAccount: (req, res) => {
        account.findById(account.params.account_id, (err, acccount) => {
            if (err || !expenses) {
                return res.status(404).json(err);
            }
            account.Income.salary = req.body.salary;
            account.Income.recurring = req.body.recurringIncome;
            account.Income.other = req.body.otherIncome;
            account.taxrate = req.body.taxrate;
            
            account.save(() => {
                if (err) {
                    return res.status(500).json({ message: 'unable to update expenses details' });
                } else {
                    return res.status(200).json(account);
                }
            });



        });
    },

    deleteAccount: (req, res) => {
        account.remove({ _id: req.params.expenses_id, }, (err, expenses) => {
            if (err) {
                return res.status(500).json(err);

            }
            return res.json(expenses);

        });


    },
    
  
    getAcccountBalance: (req, res) => {
        account.findById(req.params.account_id, (err, salary, recurringIncome, otherIncome, Tax) => {
            if (err || !account) {
                return res.status(404).json(err);
            }
            const AccountBalance = (salary + recurringIncome + otherIncome - Tax);
            return AccountBalance;

        });
    },


    


};

module.exports = AccountControl;
