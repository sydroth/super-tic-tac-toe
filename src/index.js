var express = require('express');
var app = express();
import { Board } from './board'

app.use(express.static('dist/public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/api/games/new', function(req, res){
  console.log('Attempting to create new game...')
  let newBoard = new Board()
  newBoard.place('X', 0, 0)
  console.log(newBoard)
  res.send(newBoard.boardString())
})
