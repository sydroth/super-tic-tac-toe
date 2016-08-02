var express = require('express');
var app = express();
let pug = require('pug')
let path = require('path')

import { Board } from './board'

app.use(express.static('dist/public'));
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/api/games/new', function(req, res){
  // console.log('Attempting to create new game...')
  // let newBoard = new Board()
  // newBoard.place('X', 0, 0)
  // console.log(newBoard)
  // res.send(newBoard.boardTable())
})

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Tic Tac Toe (Simple)',
    message: 'Hello there!',
    board: ['X', ' ', ' ', 'O', 'X', 'O', ' ', ' ', ' ']
  });
});
