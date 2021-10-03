const fs = require('fs');
const path = require('path');

function createNote(body, savedNotes) {
    let note = body;
    savedNotes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({savedNotes},null,2)
    )
    return savedNotes;
}

module.exports = {
    createNote
}