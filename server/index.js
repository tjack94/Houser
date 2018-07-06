const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const massive = require('massive');
require('dotenv').config();

const app = express()
app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING)
.then(db=>{
    console.log("db Connected")
    app.set("db", db)
})
.catch(err => console.log(err))

app.get('/api/houses', controller.read)
app.post('/api/house', controller.create)
app.delete('/api/house/:id', controller.delete)

const port = 3002

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});