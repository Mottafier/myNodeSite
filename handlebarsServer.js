var express = require('express')
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

var app = express();

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars')

const port = 1177;

var path = __dirname + "/public"

//app.use(express('public'));
app.use(express(path));
app.use(express.static(path + "/images"));
app.use(express.static(path + "/css"));
app.use(express.static(path + "/js"));

app.get(['/','/index'],(req,res)=>{
    res.render('index');
});
app.get('/shop',(req,res)=>{
    res.render('shop');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.use((req,res)=>{
    res.status(404)
    res.render('404');
});
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500)
    res.render('500');
});

app.listen(port,()=>{
    console.log("listening");
})