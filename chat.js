const express = require('express');
const Server = require('socket.io');

const PORT = 9000;

const app = express();

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(PORT, () => console.log(`Listen on port ${PORT}`));

const io = new Server(expressServer)

io.on("connection", (socket) => {
  socket.emit('messageFromServer', {data: 'Welcome!'})
  socket.on('messageToServer', (dataFromClient) => {
    console.log(dataFromClient)
  })
});