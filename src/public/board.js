// defines game behavior
// class SuperBoard{
//   constructor()
// }

class Board {
  constructor(id = Math.random().toString(36).substr(2, 1)) {
    this.id = id
    this.board = '.........'.split('')
    this.xsTurn = true
    this.isFinished = false
    this.winner = false
  }

  autoPlay() {
    // should return an array of 9 moves i.e. locations
    return [8, 7, 6, 5, 4, 3, 2, 0, 1]
  }

  isEmpty() {

  }

  display() {
    console.log(this.board)
  }

  placeSymbol(cellId, symbol) {
    this.board[cellId] = symbol
    this.isFinished = this.checkForWin()
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

  checkForWin() {
    return this.checkHoriz() || this.checkVertical() || this.checkDiag()
  }

  checkHoriz(){
    var board = this.board;
    var numRows = 3
    for(var i = 0; i < numRows; i++){
      var rowLeft = i * 3
      if(board[rowLeft] === board[rowLeft + 1] && board[rowLeft] === board[rowLeft + 2] && board [rowLeft] != "."){
        this.winner = board[rowLeft]
        return true
      }
    }
  }

  checkVertical(){
    var board = this.board;
    var numColumns = 3
    for(var i = 0; i < numColumns; i++){
      var columnTop = i
      if(board[columnTop] === board[columnTop + 3] && board[columnTop] === board[columnTop + 6] && board [columnTop] != "."){
        this.winner = board[columnTop]
        return true
      }
    }
  }

  checkDiag(){
    var board = this.board;
    if(board[0] === board[0 + 4] && board[0] === board[0 + 8] && board[0] != "."){
      this.winner = board[0]
      return true
    }
    if(board[2] === board[2 + 2] && board[2] === board[2 + 4] && board [2] != "."){
      this.winner = board[2]
      return true
    }
  }

}
