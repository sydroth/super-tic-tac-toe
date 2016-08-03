'use strict'

let globalBoard = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
let blankArray = ['.', '.', '.','.', '.', '.', '.', '.', '.']


$( document ).ready(() => {
  let b = new Board()
  // createNewBoard()
  updateBoard(b)
  attachListeners()
})

const updateBoard = (board) => {
  let idsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(k => '#cell-' + k)
  idsArray.forEach(k => {
    $(k).html(board.board[k.charAt(k.length - 1)])
  })
  console.log(board.xsTurn);
}

const attachListeners = () => {
  let cell = $('.yellow')
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

  }

  display() {
    console.log(this.board)
  }

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
