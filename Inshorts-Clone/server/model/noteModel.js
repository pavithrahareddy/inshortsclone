// const mongoose = require("mongoose");
import mongoose from 'mongoose'

const notesSchema = {
    title:String,
    content:String
}

const Note = mongoose.model("Note",notesSchema);

// module.exports = Note;

export default Note;