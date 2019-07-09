 const userRoutes = require('./user');

const router = (app) => {
    app.use('/api/users', userRoutes);
    app.use('api/accounts', accountsRoutes);
    api.use('api/expenses', expensesRoutes);
    api.use('api/Debts', DebtsRoutes);
    api.use('api/Bills', BillsRoutes);
    
};

module.exports = router;