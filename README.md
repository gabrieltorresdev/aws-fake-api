# 📚 Sistema de Gerenciamento de Biblioteca

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![JSON Server](https://img.shields.io/badge/JSON_Server-0.17+-blue.svg)](https://github.com/typicode/json-server)

### Sobre 

API fake para sistema de gerenciamento de biblioteca usando **JSON Server** e **Express**. O sistema permite gerenciar livros, autores, editoras, usuários e empréstimos.

## Dependências 

Para instalar as dependências execute:
```
npm install
```

## Iniciar 

Para rodar o projeto execute:
```
npm start
```

## Acessar 
Para acessar o projeto rodando, utilize os endereços abaixo:

- JSON-Server: [http://localhost:3000](http://localhost:3000)
- Express: [http://localhost:8800](http://localhost:8800)

## Endpoints

- **GET /livros-com-relacionamentos**: Retorna todos os livros com informações de autores e editoras
- **GET /emprestimos-usuarios**: Retorna todos os empréstimos com informações de livros e usuários

## Diagrama do Banco de Dados
![Diagrama do Banco de Dados](https://dbdiagram.io/embed/67f9886a4f7afba1844ce5f7)

## Estrutura de Dados

O banco de dados contém as seguintes entidades:

- **Livros**: Livros disponíveis na biblioteca
- **Autores**: Autores dos livros
- **Editoras**: Editoras dos livros
- **Usuários**: Usuários da biblioteca
- **Empréstimos**: Empréstimos de livros por usuários

## Relacionamentos

- Um livro pertence a um autor (Livros -> Autores)
- Um livro é publicado por uma editora (Livros -> Editoras)
- Um empréstimo está associado a um livro (Empréstimos -> Livros)
- Um empréstimo está associado a um usuário (Empréstimos -> Usuários)
