const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// reassigns routes
router.use('/user', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;