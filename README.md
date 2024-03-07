# Frontend React para Sistema de Gerenciamento de Produtos

Este é o frontend desenvolvido em React para um sistema de gerenciamento de produtos. Ele se integra a uma API RESTful backend para fornecer funcionalidades de CRUD (Create, Read, Update, Delete) para produtos, além de autenticação de usuário.

## Funcionalidades Implementadas

- **Registro e Login de Usuário:** O sistema oferece formulários para registro e login de usuários.

- **Interface de Usuário para Produtos:** Após fazer login, o usuário tem acesso a uma interface que exibe os produtos e permite operações CRUD.

- **Operações CRUD:** As operações CRUD (Criar, Ler, Atualizar, Deletar) estão disponíveis para os produtos, sendo acessíveis apenas para usuários autenticados.

- **Navegação entre Visualizações:** Rotas são implementadas para facilitar a navegação entre diferentes telas, como lista de produtos, adicionar produto e editar produto.

- **Consumo de API RESTful:** A aplicação utiliza o Axios para fazer requisições à API RESTful criada no backend.

## Configuração e Uso

1. **Clonando o Repositório:**
git clone https://github.com/andre09999/FrontEndProducts.git
cd FrontEndProducts

2. **Instalando Dependências:**
npm install

3. **Configurando Variáveis de Ambiente:**
Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como a URL da API.

4. **Iniciando o Servidor de Desenvolvimento:**
npm start

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Tecnologias Utilizadas

- React
- React Router
- Axios


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias, correções ou novas funcionalidades.

