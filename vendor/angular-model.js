(function () {
  'use strict'

  var am = angular.module('angularModel', [])

  am.service('Model', model)

  function model () {
    this.log = function (string) {
      console.log(string)
    }
    this.extend = function (obj) {
      return angular.extend(this, obj)
    }
    this.fetch = function () {
      console.log('fetching data...')
    }
  }


})()
