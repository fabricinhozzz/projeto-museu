
# Documentação da API

Esta API é um sistema de feedback e administração de dados, implementada em JavaScript usando Node.js e Express. Ela utiliza o MongoDB Atlas como banco de dados na nuvem e o Mongoose como biblioteca de modelagem de dados de objeto para interação com o MongoDB. 

## Autenticação e Perfil de Usuário

### Modelo de Usuário

A API utiliza o Mongoose para criar um modelo de usuário, o qual representa os dados do usuário no sistema. A conta do administrador é tratada de forma estática e é pré-definida no código, impedindo a criação de outra conta de administrador externamente.

### Rota de Autenticação

A rota de autenticação do servidor verifica as credenciais do usuário. Por exemplo, se um usuário já visitou o museu uma vez, ele não pode acessar novamente com as mesmas credenciais.

## Feedback do Usuário

### Modelo de Envio de Dados

A API utiliza o modelo de envio de dados para armazenar os feedbacks dos usuários no MongoDB Atlas. Os dados de feedback recebidos do frontend são enviados diretamente para o banco de dados, sem verificação da identidade do remetente.

## Administração de Dados do Admin e Gráfico Dinâmico

A seção de administração de dados do administrador inclui a visualização dos dados de feedback como um gráfico em pizza. O acesso a essa funcionalidade é restrito à área exclusiva do administrador. O gráfico em pizza é implementado no frontend utilizando a biblioteca Chart.js.

## Testes

Os testes foram realizados manualmente, incluindo testes de fumaça (smoke test), que verificam se as funcionalidades básicas estão sendo transmitidas e exibidas corretamente para os clientes.

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Chart.js

## Rotas Disponíveis

1. `/autenticacao`: Rota para autenticação de usuários.
2. `/feedback`: Rota para receber e armazenar feedback dos usuários.
3. `/admin`: Rota exclusiva para o acesso e administração dos dados pelo administrador.

## Contribuições

@fabricinhozzz -- Back-End API | Documentação <br>
@expeditoernande -- Front-End
