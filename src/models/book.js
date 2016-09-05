(function (app) {
  'use strict'

  app.factory('book', book)

  function book () {

    return {
      restBook: restBook,
      bookInfo: bookInfo,
      createRestBook: createRestBook,
      createNormalBook: createNormalBook
    }

    function restBook () {
      return {
        save: function () {
          console.log('posting book to server');
        },
        fetch: function () {
          console.log('fetching book from the server');
        },
        update: function () {
          console.log('updating book on the server');
        },
        delete: function () {
          console.log('deleting book');
        }
      }
    }

    function bookInfo (state) {
      return {
        getBookInfo: function () {
          return state
        }
      }
    }

    function createRestBook (book) {
      var state = {
        title: book.title,
        author: book.author
      }

      return angular.extend(
        {},
        restBook(),
        bookInfo(state)
      )
    }

    function createNormalBook (book) {
      var state = {
        title: book.title,
        author: book.author
      }

      return angular.extend(
        {},
        bookInfo(state)
      )
    }



  }

})(angular.module('app'))
