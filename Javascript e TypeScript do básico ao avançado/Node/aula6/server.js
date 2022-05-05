const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="post">
    Nome: <input type="text" name="nome" />
    <button>Enviar</button>
  </form>
  `);
});

app.post('/', (req, res) => {
  res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
  res.send('Thank you for contacting us.');
})

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('Example app listening on port 3000!');
});