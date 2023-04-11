const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/favorite', favoriteRoutes);

module.exports = router;