require('dotenv').config();
const express = require('express')
const massive = require('massive')
const app = express()
const ctrl = require('./controller')


const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())


app.get('/api/inventory', ctrl.getInv)
app.post('/api/product', ctrl.addToInv)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        regectUnauthorized: false
    }
})


app.listen(SERVER_PORT, ()=>console.log(`Server Listening on port: ${SERVER_PORT}`))