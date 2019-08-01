const userRoutes = require('./user');
const accountRoutes = require('./account');
const DebtsRoutes = require('./Debts');
const BillsRoutes = require('./Bills');
const expensesRoutes = require('./expenses');


const router = (app) => {
    app.use('/api/users', userRoutes);
    app.use('api/account', accountRoutes);
    app.use('api/expenses', expensesRoutes);
    app.use('api/Debts', DebtsRoutes);
    app.use('api/Bills', BillsRoutes);
    
};

module.exports = router;