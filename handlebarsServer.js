var express = require('express')
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

var app = express();

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars')

const port = 1177;

var path = __dirname + "/public/"

app.use(express(__dirname + '/public'));
app.use(express.static('public'));

app.get(['/','/index'],(req,res)=>{
    res.render('index');
});
app.get('/shop',(req,res)=>{
    res.sendFile('shop');
});
app.get('/contact',(req,res)=>{
    res.sendFile('contact');
});
app.get('/about',(req,res)=>{
    res.sendFile('about');
});
app.use((req,res)=>{
    res.status(404)
    res.render('404');
});
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500)
    res.render('404');
});

app.listen(port,()=>{
    console.log("listening");
})