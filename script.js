/* Crie uma rota HTTP com express para simular o envio do seu nome como parâmetro da url e imprima em um console.log() a mensagem “Rota de API criada pelo(a): {nome}”;

OBS: substitua o {nome} pelo nome que é passado como parâmetro da url.

OBS: utilize a plataforma de API que você preferir. */

/*  No diretório backend 
  comando: node script.js
  comando: npm start  */



const express = require('express');
const app = express();


app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});

app.use(express.json());

app.post('/:name', function(req, res) {

  console.log(`Rota de API criada pelo(a): ${req.params.name}`);
  res.send(`Rota de API criada pelo(a): ${req.params.name}`);
  
});

