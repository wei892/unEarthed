// setting up the express server


//imports express to connect the express server for project
import express from 'express'
import giftsRouter from './routes/gifts.js'
import './config/dotenv.js'
import cors from 'cors'

// initialize the express app
const app = express()
app.use(cors())

// used to serve static files
// general syntax => app.use(<insert middleware>)
app.use('/public', express('./public'))
app.use('./scripts', express('./public/scripts'))
app.use('/gifts', giftsRouter)

// define route for the root url
// helps us check that our server is working and responding correctly
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;"> UnEarthed API</h1>')
})

// start the server on port
const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log(`Sever listening on http://localhost:${PORT}`)
})





