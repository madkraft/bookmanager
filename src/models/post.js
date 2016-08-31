(function (app) {
  'use strict'

  app.factory('Post', Post)

  Post.$inject = ['$resource']
  function Post ($resource) {

    var Post = $resource('https://jsonplaceholder.typicode.com/posts', {}, {
      update: {
        method: 'PUT'
      }
    })
    return Post

  }

})(angular.module('app'))
