'use strict'

var imgur = require('imgur');
var Promise = require('bluebird');

function ghostImgur(config) {
  this.config = config || {};
}

ghostImgur.prototype.save = function(file) {
  return new Promise(function(resolve, reject) {
    imgur.uploadFile(file.path)
      .then(function(json) {
        if(!json || !json.data || !json.data.link) return reject();
        resolve(json.data.link);
      })
      .catch(reject);
  });
}

ghostImgur.prototype.serve = function() {
  return function(req, res, next) {
    next();
  };
}

module.exports = ghostImgur;
