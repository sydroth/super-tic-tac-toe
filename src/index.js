var express = require('express');
var app = express();
let pug = require('pug')
let path = require('path')

app.use(express.static('dist/public'));
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/api/games/new', function(req, res){
  console.log('Attempting to create new game...')
  res.render('index', {
    title: 'Tic Tac Toe (Simple)',
    message: 'Hello there!'
  });
})

app.get('/', (req, res) => {
  res.redirect('/super');
})

app.get('/simple', function (req, res) {
  res.render('simple', {
    title: 'Tic Tac Toe (Simple)',
    message: 'Tic Tac Toe'
  });
});

app.get('/super', (req, res) => {
  res.render('super', {
    title: 'Super Tic Tac Toe',
    message: 'Google it'
  })
})

app.get('/rules', (req, res) => {
  res.render('rules', {
    title: 'Game Rules',
    message: 'Find out how to play'
  })
})
