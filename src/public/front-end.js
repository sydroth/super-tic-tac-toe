'use strict'

$( document ).ready(() => {
  attachListeners()
  createNewBoard()
});

const createNewBoard = () => {
  $.get('/api/games/new', function(data) {
      console.log('ajax data', data)
      $('#board').html(data)
    })
}

const attachListeners = () => {

  let cell = $('.yellow')
  console.log('cell', cell)

  $('.yellow').click(function() {
    console.log("You clicked on", this)
  })
}
