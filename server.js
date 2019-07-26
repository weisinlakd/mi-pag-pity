const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

 
app.use( express.static( __dirname + '/public'));

//hbs
 
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers
hbs.registerHelper('getYear', ()=> {
    return new Date().getFullYear();
})

app.get('/', function (req, res) {
   

    res.render('home.hbs', {
        nombre: 'Luciano',
        
    });
});


app.get('/about', function (req, res) {
    res.render('about.hbs', {
        
        img: 'assets/img/pity.jpg'
    });
    

});
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})