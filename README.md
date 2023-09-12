## Projeto responsivo que simula um aplicativo para controle de estoque

https://projeto-estoque-pedro.vercel.app/

### Tecnologias Utilizadas:
React, JavaScript, Vite, HTML, CSS

![stock1](https://github.com/pedrogoulart8/projeto-estoque/assets/116767490/d4155999-4c2f-467b-9ec6-ff0a9525e161)
![stock2](https://github.com/pedrogoulart8/projeto-estoque/assets/116767490/42edd092-c00e-4039-ba7e-e3b93a9db78c)

## SOBRE O PROJETO
Criei um contexto personalizado para compartilhar dados e funções entre os componentes do projeto. Este contexto foi exportado para o app.jsx, para que todo o projeto possa ser renderizado dentro desse contexto.

Ainda dentro de app, exportei as rotas necessarias para o projeto.

Inseri um formulário para adicionar itens no estoque e também foi criada uma tabela para organizar os itens já adicionados, com opção de visualizar, deletar e também atualiza-los.

No momento que os itens estão sendo adicionados, eles passam por uma validação. O usuário deve inseri-los da forma correta senão aparece uma mensagem de erro.

Além da validação, utilizei uma classe para modelar os valores que o usuario insere nos inputs do formulário. Essa classe será passada como parametro para a função responsável por adicionar itens, onde essa função irá atualizar o state (setItems) de "items" dentro do contexto geral do projeto, e também irá atualizar os dados dentro de localStorage.

Os itens adicionados ficam disponiveis para o usuario visualizar na tabela do aplicativo e também dentro do localstoraged, ou seja, o usuario pode atualizar a pagina que os dados continuarão salvos no navegador.
