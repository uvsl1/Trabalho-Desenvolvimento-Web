> **Importante:**  
> Navegadores bloqueiam requisições a arquivos locais, como JSON, quando você abre o `index.html` diretamente (via protocolo `file://`). Isso impede que o site carregue dados importantes, como os arquivos JSON de login e do catálogo de livros.

> Para que tudo funcione corretamente, é necessário abrir o projeto usando um servidor local. Veja duas formas simples para isso:

---

### Como abrir o projeto corretamente

#### Opção 1: Usando Live Server no VS Code

1. Abra a pasta do projeto no Visual Studio Code.
2. Clique com o botão direito no arquivo `index.html`.
3. Selecione **"Open with Live Server"**.
4. O navegador abrirá o projeto em um endereço como:  
   `http://127.0.0.1:5500/index.html`

#### Opção 2: Usando servidor Python

1. Abra o projeto em qualquer editor de codigo ou entre no CD que o arquivo está
2. Digite o seguinte comando:

   ```bash
   python -m http.server 8000
3. Entre no endereço `localhost:8000` em qualquer navegador.

## Como usar

1. Faça login com um usuário e senha válidos cadastrados no arquivo data/logins.json (Exemplo: usuário: admin, senha: 123).
2. Na página do catálogo, você pode:
   - Buscar livros pelo nome ou autor.
   - Adicionar novos livros.
   - Remover livros existentes.
