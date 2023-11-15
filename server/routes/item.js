var express = require('express');
var router = express.Router();

let item = require('../models/item');
let ItemController = require('../controller/item')

// Read Operation
router.get('/', ItemController.dislayItemlist);

router.get('/add', ItemController.displayAddPage); 

router.post('/add', ItemController.processAddPage);

router.get('/edit/:id', ItemController.displayEditPage);

router.post('/edit/:id', ItemController.processEditPage);

router.get('/delete/:id', ItemController.performDelete);

 module.exports = router;