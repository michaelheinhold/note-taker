const router = require('express').Router();
const db = require('../../db/db.json');
const path = require('path');
const { createNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let response = db.savedNotes;
    res.send(response);
});

router.post('/notes', (req, res) =>{
    if(!db.length){
        db.length = 0;
    }
    req.body.id = db.length.toString();

    const newNote = createNote(req.body, db.savedNotes);
    res.json(newNote);
})

module.exports = router;