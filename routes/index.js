const userRoutes = require('./user');


const router = (app) => {
    app.use('/api/users', userRoutes);
    
};

module.exports = router;