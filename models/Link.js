const mongoose = require('mongoose')

const LinkSchema = new mongoose.Schema({
  prefix: String,
  directTo: String,
})

const Link = mongoose.model('links', LinkSchema)

module.exports = Link
