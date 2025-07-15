# 🛒 Carrinho de Compras - Node.js

Este é um projeto simples desenvolvido em **Node.js** com **JavaScript puro**, com o objetivo de praticar conceitos de **modularização**, **organização de código** e **manipulação de objetos**, tudo executado diretamente no **terminal**.

---

## 🎯 Objetivo

- Praticar a lógica de programação com foco em backend.
- Exercitar a modularização separando responsabilidades em arquivos específicos.
- Simular um fluxo básico de carrinho de compras.

---

---

## ⚙️ Como funciona

- **Item:**  
  - Representado por um objeto com:
    - `name`: nome do produto
    - `price`: preço unitário
    - `quantity`: quantidade
    - `subtotal()`: método para calcular o valor total daquele item (`price * quantity`)

- **Cart (Carrinho):**  
  - Funções principais:
    - `createItem`: cria e adiciona um item ao carrinho
    - `removeItem`: remove um item do carrinho
    - `calculateTotal`: calcula o valor total do carrinho somando todos os subtotais
    - `displayItems`: exibe todos os itens no terminal

- **index.js:**  
  - Atua como o **controller**, importando os serviços do `Cart` e do `Item`.
  - É responsável por executar e orquestrar as ações no terminal.

---

## ▶️ Como rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/carrinho-compras.git


