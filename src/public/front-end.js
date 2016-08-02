'use strict'

$( document ).ready(() => {
  $.get('/api/games/new', function(data) {
    console.log('ajax data', data)
    $('#board').html(data)
  })
  // make the ajax/get call
    // in callback, console log result for now
    // find the element with board id
      // replace its html with result
});
