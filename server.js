const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));  // Statische Dateien (z.B. CSS)
app.use(bodyParser.urlencoded({ extended: true }));

// Setze EJS als View-Engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/agb', (req, res) => {
    res.render('agb');
});

app.get('/hilfe', (req, res) => {
    res.render('hilfe');
});

app.get('/kreditbeantragen', (req, res) => {
    res.render('kreditbeantragen');
});

app.get('/geldsenden', (req, res) => {
    res.render('geldsenden');
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
