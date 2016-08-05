'use strict'

// does HTML things

let globalBoard = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']



$( document ).ready(() => {
  let b = new Board()
  attachListeners(b)
  // autoPlay(b)
})

const autoPlay = (b) => {
  console.log('Starting to Auto Play...')
  let moves = b.autoPlay()
  moves.forEach(k => {
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

const displayTurn = (boardArg) => {
  $('#turn').html(boardArg.nextToMove()+"'s turn")
}

const attachListeners = (boardArg) => {
  let cell = $('.yellow')
  $('.yellow').click(function() {
    place(this, boardArg)
    // $(this).unbind()
    console.log("this")
  })
}


const place = (thisCell, boardObj=new Board()) => {
  console.log('Running with thisCell', thisCell)
  let cellId = thisCell.id[7]
  let boardId = thisCell.id[5]
  console.log('thisCell.id', thisCell.id, 'cccellId', cellId, 'boardId', boardId, 'boardObj.nextToMove()', boardObj.nextToMove())

  $('#' + thisCell.id).html(boardObj.nextToMove())
  boardObj.place(cellId)

}
