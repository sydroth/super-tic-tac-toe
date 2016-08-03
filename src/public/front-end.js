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
    $(this).html(boardArg.nextToMove())
    // console.log(this.id)
    // console.log("BoardArg:", boardArg.nextToMove());
    // console.log("You clicked on", this)
    let cell = this.id.replace('cell-', '')
    // console.log(cell)
    boardArg.board[cell] = boardArg.nextToMove()
    console.log(boardArg.board)
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

  checkforWin() {
    checkHoriz();
    checkVertical();
    checkDiag();
  }

  checkHoriz(){
    var board = this.board;
    var numRows = 3
    for(var i = 0; i < numRows; i++){
      var rowLeft = i * 3
      if(board[rowLeft] === board[rowLeft + 1] && board[rowLeft] === board[rowLeft + 2] && board [rowLeft] != " "){
        console.log(board[rowLeft], " WINS!!!")
      }  
    }
  }

  checkVertical(){
    var board = this.board;
    var numColumns = 3
    for(var i = 0; i < numColumns; i++){
      var columnTop = i
      if(board[columnTop] === board[columnTop + 3] && board[columnTop] === board[columnTop + 6] && board [columnTop] != " "){
        console.log(board[columnTop], " WINS!!!")
      }  
    }
  }

  checkDiag(){
    var board = this.board;
    if(board[0] === board[0 + 4] && board[0] === board[0 + 8] && board[0] != " "){
      console.log(board[0], " WINS!!!")
    }
    if(board[2] === board[2 + 2] && board[2] === board[2 + 4] && board [2] != " "){
      console.log(board[2], " WINS!!!")
    }  
  }

}
