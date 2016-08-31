(function (app) {
  'use strict'

  app.controller('MainController', MainController)

  MainController.$inject = ['appStateService', 'Book']
  function MainController (appState, Book) {
    var ctrl = this

    window.appState = appState

    ctrl.user = appState.name
    ctrl.bookstore = appState.bookstore

    ctrl.bookTitle = ''
    ctrl.bookAuthor = ''
    ctrl.onSubmit = onSubmit

    function onSubmit () {
      var newBook = new Book ({
        title: ctrl.bookTitle,
        author: ctrl.bookAuthor
      })

      ctrl.bookTitle = ''
      ctrl.bookAuthor = ''

      appState.bookstore.push(newBook)
    }

  }

})(angular.module('app'))
