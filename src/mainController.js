(function (app) {
  'use strict'

  app.controller('MainController', MainController)

  MainController.$inject = ['appStateService', 'Book', 'Post']
  function MainController (appState, Book, Post) {
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

    ctrl.post = new Post()
    appState.post = ctrl.post
    appState.posts = Post.query()

  }

})(angular.module('app'))
