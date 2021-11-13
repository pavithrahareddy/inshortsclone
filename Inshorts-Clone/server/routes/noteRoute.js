import express from 'express'
const router = express.Router()
// import Note from "../model/noteModel";
import NotesClient from '../model/noteModelClient'

// const Note = require('../model/noteModel')

router.route('/create').post((req, res) => {
  const title = req.body.title
  const content = req.body.content
  const newNote = new NotesClient({
    title,
    content,
  })

  newNote.save()
})

router.route('/notes').get((req, res) => {
  Note.find().then((foundNotes) => res.json(foundNotes))
})

// module.exports = router
export default router
