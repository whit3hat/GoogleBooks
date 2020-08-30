const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

<<<<<<< HEAD
//API Routes
router.use('/api', apiRoutes);

//if no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
=======
// API Routes
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
>>>>>>> 0c7d7352aebcbf282b975e4d23e986e84e845f26
});

module.exports = router;