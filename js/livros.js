let livrosOriginais = [];
let livrosExibidos = [];

// Carregar livros do JSON ao iniciar
fetch('../data/livros.json')
  .then(response => response.json())
  .then(data => {
    livrosOriginais = data;
    livrosExibidos = [...livrosOriginais]; 
    renderizarLivros(livrosExibidos);
  })
  .catch(error => console.error('Erro ao carregar livros:', error));

// Função para exibir os livros na tela
function renderizarLivros(lista) {
  const booksList = document.getElementById('booksList');
  booksList.innerHTML = '';

  if (lista.length === 0) {
    booksList.innerHTML = '<p>Nenhum livro encontrado.</p>';
    return;
  }

  lista.forEach((livro, index) => {
    const div = document.createElement('div');
    div.className = 'book';

    div.innerHTML = `
      <h3>${livro.nome}</h3>
      <p><strong>Autor:</strong> ${livro.autor}</p>
      <p>${livro.sinopse}</p>
      <button onclick="removerLivro(${index})">Remover</button>
    `;

    booksList.appendChild(div);
  });
}

// Filtro por nome
document.getElementById('searchPorNome').addEventListener('input', function () {
  const termo = this.value.toLowerCase();
  livrosExibidos = livrosOriginais.filter(livro =>
    livro.nome.toLowerCase().includes(termo)
  );
  renderizarLivros(livrosExibidos);
});

// Filtro por autor
document.getElementById('searchPorAutor').addEventListener('input', function () {
  const termo = this.value.toLowerCase();
  livrosExibidos = livrosOriginais.filter(livro =>
    livro.autor.toLowerCase().includes(termo)
  );
  renderizarLivros(livrosExibidos);
});

// Adicionar livro
document.getElementById('addBookForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const autor = document.getElementById('autor').value.trim();
  const sinopse = document.getElementById('sinopse').value.trim();

  if (!nome || !autor || !sinopse) {
    alert('Preencha todos os campos.');
    return;
  }

  const novoLivro = { nome, autor, sinopse };
  livrosOriginais.push(novoLivro);
  livrosExibidos = [...livrosOriginais];
  renderizarLivros(livrosExibidos);

  this.reset();
});

// Remover livro
function removerLivro(index) {
  if (confirm('Deseja remover este livro?')) {
    livrosOriginais.splice(index, 1);
    livrosExibidos = [...livrosOriginais];
    renderizarLivros(livrosExibidos);
  }
}
