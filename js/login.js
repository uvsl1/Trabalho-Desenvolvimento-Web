console.log("JS carregado");

function validarLogin(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Faz uma requisição para carregar o arquivo JSON com os logins válidos
  fetch('../data/logins.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar os logins');
      }
      return response.json();
    })
    .then(logins => {
      // Verifica se existe algum login no JSON que coincida com usuário e senha digitados
      const loginValido = logins.some(login =>
        login.usuario === usuario && login.senha === senha
      );

      if (loginValido) {
        window.location.href = "livros.html";
      } else {
        alert("Login inválido. Tente novamente.");
      }
    })
}