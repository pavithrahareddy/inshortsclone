import express from 'express'
const router = express.Router()
import Note from "../model/noteModel";

// const Note = require('../model/noteModel')

router.route('/create').post((req, res) => {
  const title = req.body.title
  const content = req.body.content
  const newNote = new Note({
    title,
    content,
  })

  newNote.save()
})

// module.exports = router
export default router;
