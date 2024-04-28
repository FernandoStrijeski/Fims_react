# React + TypeScript + Vite
![version](https://img.shields.io/static/v1?label=version&message=1.0.0&color=blue)
![status](https://img.shields.io/badge/status-em_funcionamento-green)
![release-date](https://img.shields.io/badge/release%20date-04--2023-green)
 ![GitHub Org's stars](https://img.shields.io/github/stars/FernandoStrijeskiLinx?style=social)

FILMZ - Site para consulta de Filmes e adição a lista de desejos.
<p align="center">
  <img src="https://github.com/FernandoStrijeskiLinx/Fims_react/blob/main/Logo.png" alt="Filmz Logo"/>  
</p>

# 📄**Documentação do Projeto**
O projeto foi construído utilizando VSCode no formato SPA com React.js com TypeScript e VITE, utilizando o axios para consumir as APIS.

O principal benefício do projeto em react.js que destaco aqui é a componentização, permitindo a reutilização do código de forma mais clara e limpa.

Para saber mais sobre as extensões utilizadas, consulte o arquivo "package.json" existente no projeto.

Sobre o site:
Possui uma página inicial, relacionando os TOP 10 filmes mais procurados na semana. Todas as páginas contém o menu para acesso aos filmes adicionados em "Minha lista", assim como uma ferramenta de pesquisa de filmes pelo nome.
Ao clicar em minha lista é possível visualizar os filmes adicionados na lista para assistir mais tarde. A gravação nessa lista é feita por meio de localstorage com contexto.
Ao digitar um nome de um filme, ou parte dele, o site realiza a busca de todos os filmes correspondentes no site themoviedb.com, através do consumo da API fornecida pelo site, permitindo obter mais informações sobre os filmes e adicionar qualquer filme a lista.

   <br>
   Relação dos componentes utilizados no projeto
   <table>
   <tr>
   <td>Componente</td>
   <td>Descrição</td>
   </tr>
   <tr>
   <td>Button</td>
   <td>Botões utilizados para busca, adição/remoção da lista ou detalhar um filme.</td>
   </tr>
  <td>Header</td>
   <td>Cabeçalho existente no site, comum a todas as navegações da página.</td>
   </tr>
     <td>Link</td>
   <td>Componente para criação de links de navegações entre as páginas, através do react-rouber-dom.</td>
   </tr>
     <td>Loading</td>
   <td>Exibição do aviso de carregamento da página quando ativado.</td>
   </tr>
     <td>MovieCard</td>
   <td>Painel agrupando o filme e todas suas informações relevantes.</td>
   </tr>
   </table>      

# 🗂️**Acesso ao projeto**

Você pode [acessar o código fonte do projeto](https://github.com/FernandoStrijeskiLinx/Fims_react/) ou [baixá-lo](https://github.com/FernandoStrijeskiLinx/Fims_react/archive/refs/heads/main.zip).

## Abrir e rodar o projeto

Após baixar o projeto, você pode abrir com o `VS Code`.
<br>

# ⚙️**Configurações**
Para execução dessa aplicação não necessário criar a base de dados, uma vez que para fins didáticos, utiliza o localstorage do navegador para gravar e editar as informações.

Para utilizar esse projeto você precisa ter conta no site abaixo, que possui uma vasta gama de informações sobre diversos filmes:<br>
https://www.themoviedb.org/<br><br>

Após isso, criar uma chave de uso para a API fornecida pelo site.<br><br>

É necessário criar um arquivo .env na raiz do projeto para setar as variáveis abaixo:<br>
VITE_THE_MOVIE_DB_API_KEY={SUA_API_KEY}<br>
VITE_THE_MOVIE_DB_IMAGES_URL=https://image.tmdb.org/t/p/w500<br>
VITE_THE_MOVIE_DB_BASE_URL=https://api.themoviedb.org/3<br><br>


Pode ser necessário instalar as extensões abaixo:
> Styled-components;
    O styled-components foi criado para que seja possível utilizar o JavaScript junto com o CSS.

> React-icons;
    A biblioteca React-icons é feita para conseguir acessar ícones, que auxiliam bastante na forma visual. Ela tem imagens pré-definidas, evitando que você precise baixar ícones de sites externos. Para conseguir utilizar os ícones, o comando npm install react-icons deve ser rodado no terminal.

> Axios
    A biblioteca Axios possui funções de requerimentos para APIs. Com isso, ela consegue consumir os objetos JSON que estão inseridos dentro de uma API, vindos de um banco de dados. Sua instalação é feita por meio do comando npm install axios.

# 🔗**Links úteis**
   [React](https://pt-br.react.dev)<br>
   [Vercel - Transform HTML do JSX](https://transform.tools/html-to-jsx)<br>
   [themoviedb.org/](https://www.themoviedb.org/)<br>
   [Shields.io](https://shields.io/badges)



# 📸**Preview**
<img src="https://github.com/FernandoStrijeskiLinx/Fims_react/blob/main/preview.png">

# DEMO **
https://fims-react.vercel.app/

# 💻**Autor**

- [@FernandoStrijeski](https://github.com/FernandoStrijeskiLinx)

Nos vemos no próximo projeto! 👋✌️
* Agradecimentos: Linx Academy + Conquer.
