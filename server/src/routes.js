const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const perfumeController = require('./controllers/perfumeController');

router.use(homeController);
// router.use('/user', userController)
router.use('/perfume', perfumeController);
// router.use('*', (req, res) => {
//     res.render('404');
// })

module.exports = router;