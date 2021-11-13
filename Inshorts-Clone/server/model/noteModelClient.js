// const mongoose = require("mongoose");
import mongoose from 'mongoose'

const notesSchemaClient = {
  title: String,
  content: String,
}

const NotesClient = mongoose.model('Notes', notesSchemaClient)

// module.exports = Note;

export default NotesClient
