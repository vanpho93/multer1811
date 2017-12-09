const express = require('express');
const reload = require('reload');
const uploadConfig = require('./uploadConfig');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const uploadSingle = uploadConfig.single('image');

app.post('/signup', (req, res) => {
    uploadSingle(req, res, err => {
        if (err) return res.send(err.message);
        console.log(req.file);
        console.log(req.body);
        res.send('Thanh cong');
    });
});

const uploadArray = uploadConfig.array('image');
app.post('/array', (req, res) => {
    uploadArray(req, res, err => {
        if (err) return res.send(err.message);
        console.log(req.files);
        console.log(req.body);
        res.send('Thanh cong');
    });
});

const uploadFields = uploadConfig.fields([
    { name: 'image', maxCount: 2 },
    { name: 'main', maxCount: 1 }
]);

app.post('/group', (req, res) => {
    uploadFields(req, res, err => {
        if (err) return res.send(err.message);
        console.log(req.files);
        console.log(req.body);
        res.send('Thanh cong');
    });
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/array', (req, res) => {
    res.render('array');
});

app.get('/group', (req, res) => {
    res.render('group');
});

app.get('*', (req, res) => res.redirect('/'));

app.listen(3000, () => console.log('Server started!'));
