const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Bem-vindo a minha API!');
});

server.listen(3000, () => {
    console.log('API escutando em http://localhost:3000');
});
