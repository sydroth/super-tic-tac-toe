// class Board {
//   constructor() {
//     this.board = [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null]
//     ]
//     this.xsTurn = true
//   }
//
//   nextToMove() {
//     this.xsTurn ? 'X' : 'O'
//   }
//
//   isEmpty() {
//     // console.log('inside this.isEmpty')
//     // console.log(this.board)
//     // return (this.board === [
//     //   [null, null, null],
//     //   [null, null, null],
//     //   [null, null, null]
//     // ])
//   }
//
//   display() {
//     console.log(this.board)
//     // find id in index.html, replace HTML with this board
//   }
//
//   place(letter, x, y) {
//     this.board[y][x] = letter
//   }
//
//   makeBestMove() {
//     this.place('X', 1, 1)
//     // calculate potential opponent winning columns/diagonals
//       // if any of them already have two opponent pieces, place on the third
//       // if any of them have one opponent piece (and none of mine), randomly pick one
//       // if no potential wins for opponent, randomly pick one
//   }
//
//   rowScores() {
//   }
//
//   rowToScore(row, mine) {
//
//   }
//
// }
//
// let b = new Board()
// b.display()
// b.makeBestMove()
// b.display()
