const mongodb = require('mongodb');
const async = require('async');
const bodyParser = require('body-parser');
const TestUsers = require('./data/user');
const TestExpenses = require('./data/expenses');
const TestDebts = require('./data/Debts');
const TestBills = require('./data/Bills');
const TestAccount = require('./data/account');

const url = 'mongodb://localhost/financemanager';
async.series([
    (callback) => {
        const MongoClient = mongodb.MongoClient;
        let users;
        let account;
        let expenses;
        let Debts;
        let Bills;
        MongoClient.connect(url, (err, financemanager) => {
            if (err) {
                return callback(err)
            }

            console.log("########### deleteing data#####");
            users = financemanager.collection('users');
            account = financemanager.collection('account');
            expenses = financemanager.collection('expenses');
            Debts = financemanager.collection('Debts');
            Bills = financemanager.collection('Bills');
            users.remove();
            account.remove();
            expenses.remove();
            Debts.remove();
            Bills.remove();
            console.log("+++++++++ adding data+++++++");
             
            users.insert(TestUsers, (err, result) => {
                if (err) {
                    console.log("users could not be added:", err);
                } else {
                    console.log("users added successfully", result.insertedCount);
                    callback();
                }
            });
            account.insert(TestAccount, (err, result) => {
                if (err) {
                    console.log("account could not be created:", err);
                } 
                    console.log("account created succesfully", result.insertedCount);
                callback();
            });
            Debts.insert(TestDebts, (err, result) => {
                if (err) {
                    console.log("error adding Debts:", err);
                } else {
                    console.log("Debts added successfully", result.insertCount);
                    callback();
                }
            });
             
            Bills.insert(TestBills, (err, result) => {
                if (err) {
                    console.log("error adding Bills:", err);
                } else {
                    console.log("Bills added successfully", result.insertCount);
                    callback();
                }
            });
          expenses.insert(TestExpenses, (err, result) => {
                if (err) {
                    console.log("error adding Expenses:", err);
                } else {
                    console.log("Expenses added successfully", result.insertCount);
                    callback();
                }
            });
        });
    },
],
    (err) => {
        if (err) {
            console.log(err);
        } else {
            process.exit(0);
        }
    });
    
