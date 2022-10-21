var express = require('express');
var multer  = require('multer');

var controller = require('../controllers/main.controller');

var upload = multer({ dest: './public/uploads/' });

var router = express.Router();

router.get('/', controller.index);

// router.get('/upload', controller.getUpload)

router.post('/upload', 
	upload.single('file1'),
	controller.postUpload);

module.exports = router;