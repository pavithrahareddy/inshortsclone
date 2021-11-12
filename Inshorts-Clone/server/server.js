import express from 'express'
const app = express()
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routes/noteRoute.js'



app.use(cors())
app.use(express.json())

mongoose.connect(
  'mongodb+srv://pavithra:U3XF7zMA2VtXv1G2@muggle-inshorts.ojmqr.mongodb.net/PROJECT0?retryWrites=true&w=majority'
)
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
app.post('/', (req, res) => {
  
  console.log('a')
  const allnotes = Note.find().then(note=>{res.send(note)})
  // console.log(allnotes)
 
})

// link

app.use('/', router)

app.listen(3001, function () {
  console.log('yay running')
})
