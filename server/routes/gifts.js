// import packages
import express from 'express'
// path package provides utilities to working with files and directory paths
import path from 'path'
// convers a file url to a file path
import { fileURLToPath } from 'url'
import giftData from '../data/gifts.js'

// convert import.meta.url propety to a file path
const __filename = fileURLToPath(import.meta.url)
// a variable to contain the directory name of the current module file
const __dirname = path.dirname(__filename)


// creating routes
// express router
const router = express.Router()
// create a get route at the / endpoint that responds with status 200 and sends a JSON of the giftData
router.get('/', (req, res) => {
    res.status(200).json(giftData)
  })

  router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
  })

  export default router


