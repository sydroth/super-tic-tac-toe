'use strict'

const range = [...Array(9).keys()]
var allBoards = range.map(k => new Board())
var superXsTurn = true

$(document).ready(function () {
  var allBoards = []
  var b = allBoards[0]

  // window.pug.allBoards = allBoards
  // console.log(Object.keys(window.jade))
  // console.log(Object.keys(window.pug))
  attachListeners()
  // autoPlay(b)
})

var autoPlay = function autoPlay(b) {
  console.log('Starting to Auto Play...')
  var moves = b.autoPlay()
  moves.forEach(function (k) {
    console.log('Placing at ...', k)
    place(k, b)
  })
}

// b.update function which returns some indication whether game is over or not and who won

// const updateBoard = (boardArg) => {
//   let idsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(k => '#cell-' + k)
//   idsArray.forEach(k => {
//     $(k).html(boardArg.board[k.charAt(k.length - 1)])
//   })
// }

var displayTurn = function displayTurn(boardArg) {
  $('#turn').html(boardArg.nextToMove() + "'s turn")
}

var attachListeners = function attachListeners() {
  console.log('allBoards', allBoards)
  var cell = $('.yellow')
  $('.yellow').click(function () {
    console.log('this', this)
    var whichBoard = allBoards[this.id[5]] 
    console.log('whichBoard', whichBoard)
    place(this, whichBoard)
    $(this).off("click")
  })
}

var place = function place(thisCell) {
  var boardObj = arguments.length <= 1 || arguments[1] === undefined ? new Board() : arguments[1]

  var cellId = thisCell.id[7]
  var boardId = thisCell.id[5]
  console.log('thisCell.id', thisCell.id)
  console.log('cellId', cellId)
  console.log('boardId', boardId)
  console.log('boardObj.nextToMove()', boardObj.nextToMove())

  $('#' + thisCell.id).html(boardObj.nextToMove())
  boardObj.place(cellId)
}

var overlay = function overlay() {
  el = document.getElementById("overlay");
  el.style.display = el.style.display === 'block' ? 'none' : 'block'
}