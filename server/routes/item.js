var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let item = require('../models/item');
let ItemController = require('../controller/item')
/* Get route for the Bio Books list */
// Read Operation
router.get('/', ItemController.dislayItemlist);
/* Get route for Add Book page --> Create */
router.get('/add', ItemController.displayAddPage); 
/* Post route for Add Book page --> Create */
router.post('/add', ItemController.processAddPage);
/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id', ItemController.displayEditPage);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', ItemController.processEditPage);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', ItemController.performDelete);
 module.exports = router;