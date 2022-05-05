// const nome = 'Carlos';
// const sobrenome = 'Lima';

// const falaNome = () => nome  + ' ' + sobrenome;

// // module.exports.nome = nome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;