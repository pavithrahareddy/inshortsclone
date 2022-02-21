// const mongoose = require("mongoose");
import mongoose from 'mongoose'
const Schema =mongoose.Schema;
const notesSchema = new Schema({
    title:{
        type:String,
    },
    content:{
        type:String,
  
    },
})

const Note = mongoose.model("Note",notesSchema);

module.exports = Note;

// export default Note;