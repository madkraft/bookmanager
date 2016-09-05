(function (app) {
  'use strict'

  app.controller('MainController', MainController)

  MainController.$inject = ['appStateService', 'book']
  function MainController (appState, book) {
    var ctrl = this

    window.appState = appState

    ctrl.user = appState.name
    ctrl.bookstore = appState.bookstore

    ctrl.bookTitle = ''
    ctrl.bookAuthor = ''
    ctrl.onSubmit = onSubmit

    function onSubmit () {
      var newBook = book.createNormalBook({
        title: ctrl.bookTitle,
        author: ctrl.bookAuthor
      })

      console.log('', newBook);

      ctrl.bookTitle = ''
      ctrl.bookAuthor = ''

      appState.bookstore.push(newBook.getBookInfo())
    }

  }

})(angular.module('app'))
