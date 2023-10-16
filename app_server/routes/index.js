var express = require('express');
var router = express.Router();
var ctrllocations = require('../controller/location');
var ctrlothers=require('../controller/others');
var ctrlsign=require('../controller/signin');
/* GET home page. */
router.get('/', ctrllocations.homelist);
router.get('/location/review/new',ctrllocations.addReview);
router.get('/about',ctrlothers.about);
router.get('/register',ctrlsign.register);
router.get('/signin',ctrlsign.signin);
module.exports = router;