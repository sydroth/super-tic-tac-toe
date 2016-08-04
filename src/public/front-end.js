'use strict'

// does HTML things

let globalBoard = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

$( document ).ready(() => {
  attachListeners(b)
  let b = new Board()
  console.log('b.board', b.board)
  // createNewBoard()
  autoPlay(b)
})

const autoPlay = (b) => {
  console.log('Starting to Auto Play...')
  let moves = b.autoPlay()
  moves.forEach(k => {
    console.log('Placing at ...', k)
    place(k, 'Y')
  })
}

// b.update function which returns some indication whether game is over or not and who won

// const updateBoard = (boardArg) => {
//   let idsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(k => '#cell-' + k)
//   idsArray.forEach(k => {
//     $(k).html(boardArg.board[k.charAt(k.length - 1)])
//   })
// }

const displayTurn = (boardArg) => {
  $('#turn').html(boardArg.nextToMove()+"'s turn")
}

const attachListeners = (boardArg) => {
  let cell = $('.yellow')
  $('.yellow').click(function() {
    $(this).html(boardArg.nextToMove())
    let cell = this.id.replace('cell-', '')
    boardArg.board[cell] = boardArg.nextToMove()
    boardArg.checkforWin()
    boardArg.xsTurn = !boardArg.xsTurn
    displayTurn(boardArg)
    return boardArg
  })
}

const place = (loc, xo) => {
  console.log('Running...')
  let cellId = '#cell-' + loc
  console.log('cellId', cellId)
  $(cellId).html(xo)
}
