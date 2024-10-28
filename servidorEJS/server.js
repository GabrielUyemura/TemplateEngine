const express = require('express');
const app = express();
const PORT = 25000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rota para a página principal
app.get('/', (req, res) => {
  res.render('index', { title: 'Página Principal - EJS' });
});

// Rota para a página de manutenção de salas de aula
app.get('/manutSalaDeAula', (req, res) => {
  const salas = [
    { id: 1, descricao: 'Sala 101', localizacao: 'Bloco A', capacidade: 40, removido: false },
    { id: 2, descricao: 'Sala 102', localizacao: 'Bloco B', capacidade: 35, removido: false }
  ];
  res.render('manutSalaDeAula', { salas });
});

app.listen(PORT, () => {
  console.log(`Servidor EJS rodando em http://localhost:${PORT}`);
});