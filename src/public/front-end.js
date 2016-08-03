'use strict'

let globalBoard = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
let blankArray = ['.', '.', '.','.', '.', '.', '.', '.', '.']


$( document ).ready(() => {
  let b = new Board()
  // createNewBoard()
  updateBoard(b)
  attachListeners(b)
})

const updateBoard = (boardArg) => {
  let idsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(k => '#cell-' + k)
  idsArray.forEach(k => {
    $(k).html(boardArg.board[k.charAt(k.length - 1)])
  })
}

const attachListeners = (boardArg) => {
  let cell = $('.yellow')
  $('.yellow').click(function() {
    console.log($(this).html(boardArg.nextToMove()))
    // console.log("BoardArg:", boardArg.nextToMove());
    console.log("You clicked on", this)
    boardArg.xsTurn = !boardArg.xsTurn
    return boardArg
  })
}


class Board {
  constructor() {
    this.board = blankArray
    this.xsTurn = true
  }

  nextToMove() {
    if (this.xsTurn) {
      return 'X'
    }
    else {
      return 'O'
    }
  }

  isEmpty() {

  }

  display() {
    console.log(this.board)
  }

  // place(x, y) {
  //   this.board[y][x] = nextToMove()
  // }

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
