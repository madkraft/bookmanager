(function (app) {
  'use strict'

  app.factory('Book', Book)

  function Book () {

    function book (obj) {
      this.title = obj.title
      this.author = obj.author
    }

    return book

  }

})(angular.module('app'))
