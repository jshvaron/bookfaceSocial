const router = require('express').Router();
const apiRoutes = require('./api');

router.use('api', apiRoutes);

router.use((req, res) => {
    return res.send('Heads up! Seems like you have the wrong route...')
});

module.exports = router;