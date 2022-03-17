require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

// Connet to mongoDB
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)
    .then((result) => console.log('DB ready'))
    .catch((err) => console.error(err))

// app.use(express.json())

// Route ke short_links
app.use('/d/', require('./routes/shortLinks'));

app.get('/', (req, res) => {
  res.send('<h3>Sek durung dadi ojo rene</h3><br><small>developer e sek males</small>')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
