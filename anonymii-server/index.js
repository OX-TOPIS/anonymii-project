const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res)=> {
    res.sendFile(__dirname + 'C:/เดสก์ท็อป/AnonyMii/anonymii-server../anonymii-client/src/pages/MyChannel.jsx')
});

server.listen(3000, ()=>{
    console.log('listening on port 3000')
});