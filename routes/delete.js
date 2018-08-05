const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');

router.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs');
        }
    });
});

module.exports = router;