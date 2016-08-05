'use strict'

const range = [...Array(9).keys()]
var allBoards = range.map(k => new Board())
var XsTurn = true
var legalBoardId = false;

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
  $('.yellow').click(function (event) {
    event.preventDefault()
    placeSymbol(this)
    // console.log('CLICKED:', boardId, cellId)
    // var whichBoard = allBoards[this.id[5]] 
    // console.log('YOU CLICKED ON ', this.id)
    // console.log('whichBoard', whichBoard)
    // place(this, whichBoard)
    // $(this).off("click")
  })
}

var placeSymbol = function place(targetElement){
  var matches = targetElement.id.match(/^cell-(\d)-(\d)$/)
  var boardId = matches[1]
  var cellId = matches[2]

  // prevents illegal moves
  if (
    legalBoardId && 
    (
      boardId !== legalBoardId &&
      !allBoards[legalBoardId].isFinished
    )
  ) return;

  var board = allBoards[boardId] 
  var symbol = XsTurn ? 'X' : 'O'
  legalBoardId = cellId;
  board.placeSymbol(cellId, symbol)
  $(targetElement).text(symbol)
  if (board.isFinished){
    $('#board-'+boardId).addClass('finished')
  }
  XsTurn = !XsTurn;
}

var overlay = function overlay() {
  el = document.getElementById("overlay");
  el.style.display = el.style.display === 'block' ? 'none' : 'block'
}