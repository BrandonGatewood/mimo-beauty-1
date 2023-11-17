require('dotenv').config();
const express = require('express');

// express app
const app = express();

app.post('/contact.html', (req, res) => {
    console.log('sent');
})
// listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000');
})