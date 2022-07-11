const express = require('express');
const moment = require("moment");

const app = express()
const port = 3000



app.get('/', (req, res) => {
    let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    res.send('Hello there Alejandro and Fernandito it is '+currentTime);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})