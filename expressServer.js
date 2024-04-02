var express = require('express')
//var handlebars = require('handlebars');

var app = express();

const port = 1177;

var path = __dirname + "/public/"

app.use(express.static(path + 'images'));
app.use(express.static(path + 'css'));
app.use(express.static(path + 'js'));

app.get(['/','/index.html'],(req,res)=>{
    res.sendFile(path+'index.html');
});
app.get('/shop.html',(req,res)=>{
    res.sendFile(path+'shop.html');
});
app.get('/contact.html',(req,res)=>{
    res.sendFile(path+'contact.html');
});
app.get('/about.html',(req,res)=>{
    res.sendFile(path+'about.html');
});
app.get('/*',(req,res)=>{
    res.sendFile(path+'404.html');
});

app.listen(port,()=>{
    console.log("listening");
})