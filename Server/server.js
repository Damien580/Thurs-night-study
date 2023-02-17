const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())

const {
    getSpices,
    addSpice,
    deleteSpice
} = require('./controller')

app.get('/api/spices', getSpices)
app.post('/api/spices', addSpice)
app.delete('/api/spices/:id', deleteSpice)


app.listen(4004, console.log(`App running on port 4000!`))