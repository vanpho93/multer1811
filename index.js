const express = require('express');
const reload = require('reload');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => {
        cb(null, `${req.body.name}${Date.now()}.png`)
    }
});

const upload = multer({ storage });

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.post('/signup', upload.single('image'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send('Thanh cong');
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('*', (req, res) => res.redirect('/'));

app.listen(3000, () => console.log('Server started!'));
