const express = require(`express`);
const app = express();

const PORT = 3000;

app.use('/public', express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req, res) => {
    res.render('movies');
});

app.get('/movie-details', (req, res) => {
    res.render('movie-details');
});

app.get('/movie/add', (req, res) => {
    res.send('Prochainement un film ici');
});

app.get('/movie/:id', (req, res) => {
    const id = req.params.id;
    res.render('movie-details', { moveid: id });
});

app.get(`/`, (req, res) => {
    res.render('index');
});



















app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})