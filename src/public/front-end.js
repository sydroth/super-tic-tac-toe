'use strict'

let globalBoard = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']


$( document ).ready(() => {
  console.log('Hola')
  createNewBoard()
  updateBoard(globalBoard)
  attachListeners()
})

const createNewBoard = () => {
  // $.get('/api/games/new', function(data) {
  //     // console.log('ajax data', data)
  //     // $('#board').html(data)
  //   })
  let b = new Board()
}

const updateBoard = (boardArray) => {
  console.log('boardArray', boardArray)
  let idsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(k => '#cell-' + k)

  console.log('idsArray', idsArray)
  idsArray.forEach(k => {
    $(k).html(boardArray[k.charAt(k.length - 1)])
  })
}

const attachListeners = () => {
  let cell = $('.yellow')
  console.log('cell', cell)

  $('.yellow').click(function() {
    console.log($(this).html('X'))
    console.log("You clicked on", this)
  })
}


class Board {
  constructor() {
    this.board = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    this.xsTurn = true
  }

  nextToMove() {
    this.xsTurn ? 'X' : 'O'
  }

  isEmpty() {
    // console.log('inside this.isEmpty')
    // console.log(this.board)
    // return (this.board === [
    //   ['.', '.', '.'],
    //   ['.', '.', '.'],
    //   ['.', '.', '.']
    // ])
  }

  display() {
    console.log(this.board)
  }

  // boardString() {
  //   let output = this.board[0].join('') + '<br>' +
  //   this.board[1].join('') + '<br>' +
  //   this.board[2].join('')
  //   return output
  // }

  place(x, y) {
    this.board[y][x] = nextToMove()
  }

  makeBestMove() {
    // calculate potential opponent winning columns/diagonals
      // if any of them already have two opponent pieces, place on the third
      // if any of them have one opponent piece (and none of mine), randomly pick one
      // if no potential wins for opponent, randomly pick one
  }

  rowScores() {
  }

  rowToScore(row, mine) {

  }

}

// b.makeBestMove()
// b.display()
