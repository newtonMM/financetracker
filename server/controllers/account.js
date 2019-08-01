const account = require('../models/account');

const accountControl = {
    createAccount: (req, res) => {
        const account = new Account();
        account.Income.salary = req.body.salary;
        account.Income.recurring = req.body.recurringincome;
        account.Income.other = req.body.otherincome;
        account.taxrate = req.body.taxrate;
        const Tax = (taxrate * salary);
        if (err) {
            return res.status(500).json(err);
        }
        return Tax;

        const balance = (salary + recurringincome + otherincome - taxrate);
        if (err) {
            return res.status(500).json(err);
        }
        return balance;

        account.save(() => {
            if (err) {
                return res.status(500).json({ message: 'unable to save income details' });

            } else {
                return res.status(200).json(account);
            }
        });
    },
    // update account details
    updateAccount: (req, res) => {
        Account.findById(account.params.account_id, (err, account) => {
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
        Account.remove({ _id: req.params.expenses_id, }, (err, account) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.json(expenses);
        });
    }, 
  //to compute the total amount in the account
    
       
};

module.exports = accountControl;
