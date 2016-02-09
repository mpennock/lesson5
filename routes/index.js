var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 5' });
});

// get about page
router.get('/about', function(req, res, next) {
	// show the about.ejs view
	res.render('about', { 
		myName: "Martin",
		month: "February",
		title: "About"
		} 
	);
});

// get random page
router.get('/random', function(req, res, next) {
	res.render('random', { 
		randomNumber: Math.random(),
		title: "Random"

	});
});

// make this file public within the rest of the application
module.exports = router;
