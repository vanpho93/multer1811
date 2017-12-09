const express = require('express');
const reload = require('reload');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', (req, res) => {
    res.send('Thanh cong');
});

app.get('*', (req, res) => res.redirect('/'));

app.listen(3000, () => console.log('Server started!'));
