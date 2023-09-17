import express from 'express'


// setting up the express server
const app = express
app.use('/public', express.static('./public'))
app.use('./scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;"> UnEarthed API</h1>')
})





