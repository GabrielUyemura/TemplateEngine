const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const PORT = 26000;

// Configuração do Nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.use(express.static('public'));

// Rota para a página principal
app.get('/', (req, res) => {
  res.render('index.njk', { title: 'Página Principal - Nunjucks' });
});

// Rota para a página de manutenção de salas de aula
app.get('/manutSalaDeAula', (req, res) => {
  const salas = [
    { id: 1, descricao: 'Sala 101', localizacao: 'Bloco A', capacidade: 40, removido: false },
    { id: 2, descricao: 'Sala 102', localizacao: 'Bloco B', capacidade: 35, removido: false }
  ];
  res.render('manutSalaDeAula.njk', { salas });
});

app.listen(PORT, () => {
  console.log(`Servidor Nunjucks rodando em http://localhost:${PORT}`);
});
