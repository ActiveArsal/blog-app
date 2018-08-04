const express = require('express');
const router = express.Router();

//ROUTES
router.get('/', (req, res) => {
    res.redirect('/blogs');
});



module.exports = router;