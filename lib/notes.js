const fs = require('fs');
const path = require('path');

function createNote(body, savedNotes) {
    let note = body;

    //checks to see if the id is equal to the index, and changes it
    //to be equal to the index if not.
    //this prevents any duplicate id's
    for(i=0; i < savedNotes.length; i++){
        if(savedNotes[i].id !== i){
            savedNotes[i].id = i;
        }
    }
    savedNotes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({savedNotes},null,2)
    )
    return savedNotes;
}

function deleteNote(body, savedNotes) {
    const id = body.id;

    //finds the index of the item with and id equal to the delete button clicked
    //even though id's SHOULD be equal to index already, they wont be if 
    //user is deleting multiple items at once, this solves that issue
    const removeIndex = savedNotes.findIndex(item => item.id == id);
    savedNotes.splice(removeIndex, 1);

    //re-writes the file with the deleted note taken out
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({savedNotes},null,2)
    )
    return savedNotes;
}

module.exports = {
    createNote,
    deleteNote
}