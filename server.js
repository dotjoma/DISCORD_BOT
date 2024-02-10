const express = require('express');
const server = express();

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-indexed
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();

const formattedDateTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

server.all('/', (req, res) => {
  res.send('Bot Status: [RUNNING].', formattedDateTime);
});


function keepAlive() {
  server.listen(3000, () => {
    console.log('Server is now ready! | ', formattedDateTime);
  });
}

module.exports = keepAlive; 
