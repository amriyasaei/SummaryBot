const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public/index.html'))
});
app.get('/audio', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public/audio.html'))
});
app.get('/text', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public/text.html'))
});
app.get('/about', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public/about.html'))
});


app.listen(8080);