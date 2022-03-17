'use strict'
var express = require('express');
var route = express.Router();
const os = require('os');


// Models
const Link = require('../models/Link.js')
const Access = require('../models/Access.js')

route.get('/:prefix', function(req, res) {
  
  Link.findOne({ prefix: req.params.prefix })
  .then(result => {
      if (result) {
        //simpan data siapa yang akses
        try {
          Access.create({
            prefix: req.params.prefix,
            ip: `${req.ip}` ?? '',
          })
        } catch (error) {console.error('Simpan Akses:', error)}
        res.redirect(result.directTo);
      } else {
        res.send('Maaf link tidak ada')
      }
    })
    .catch(error => res.status(500).json({error: error}))
});

module.exports = route;