const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');


// NEW ROUTE, DISPLAYS FORM 
router.get('/blogs/new', (req, res) => {
    res.render('new');
});

module.exports = router;