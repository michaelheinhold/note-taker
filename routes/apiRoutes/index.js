const router = require('express').Router();
const db = require('../../db/db.json');
const path = require('path');

router.get('/notes', (req, res) => {
    let response = db;
    res.send(response);
});

module.exports = router;