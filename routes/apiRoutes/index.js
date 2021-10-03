const router = require('express').Router();
const db = require('../../db/db.json');
const path = require('path');
const { createNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let response = db.savedNotes;
    res.send(response);
});

router.post('/notes', (req, res) =>{
    //if there are no notes saved sets length to 0 to avoid undefined error
    if(!db.savedNotes.length){
        db.savedNotes.length = 0;
    }
    //sets id to equal the length of array
    req.body.id = db.savedNotes.length.toString();

    const newNote = createNote(req.body, db.savedNotes);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res)=>{
    const removeNote = deleteNote(req.params, db.savedNotes);
    res.json(removeNote);
})

module.exports = router;