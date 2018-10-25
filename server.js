const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// HBS
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');


// Midleware

app.use(express.static(__dirname + '/public'));




app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'YosvAny aRRastIA'
    });

});
app.get('/about', (req, res) => {

    res.render('about.hbs');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});