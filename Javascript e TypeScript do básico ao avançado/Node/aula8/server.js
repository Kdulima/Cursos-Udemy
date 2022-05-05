const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="post">
    Nome do cliente: <input type="text" name="nome" />
    Outro Campo: <input type="text" name="aquiOutroCampo" />
    <button>Enviar</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) =>{
  console.log(req.params); 
  console.log(req.query);  //query string
  res.send(req.query.facebookprofile);  
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome} e ${req.body.aquiOutroCampo}`);
})

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('Example app listening on port 3000!');
});