(function (app) {
  'use strict'

  app.service('appStateService', appStateService)

  function appStateService() {
    this.name = 'Admin'
    this.bookstore = [
      {
        title: 'Animal Farm',
        author: 'George Orwell'
      },{
        title: 'The Odyssey',
        author: 'Homer'
      },{
        title: 'Dracula',
        author: 'Bram Stoker'
      }
    ]
  }

})(angular.module('app'))
