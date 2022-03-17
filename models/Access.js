const mongoose = require('mongoose')

const AccessSchema = new mongoose.Schema({
  prefix: String,
  ip: String,
})

const Access = mongoose.model('access', AccessSchema)

module.exports = Access
