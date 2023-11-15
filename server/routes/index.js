let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');
/* home page. */
router.get('/', indexController.displayHomePage);

/* home page. */
router.get('/home',  indexController.displayHomePage);
 
/* about page. */
router.get('/about', indexController.displayAboutPage);

/* projects page. */
router.get('/projects', indexController.displayProjectPage);

/* contact page. */
router.get('/contact', indexController.displayContactPage );

module.exports = router;
