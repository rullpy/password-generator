# 🔐 Gerador de Senhas

Um gerador de senhas simples e personalizável desenvolvido com **JavaScript**, permitindo criar senhas seguras com diferentes combinações de caracteres.

## 📌 Funcionalidades

- Definir a **quantidade de caracteres** da senha
- Incluir **letras maiúsculas**
- Incluir **letras minúsculas**
- Incluir **números**
- Incluir **símbolos**
- Interface moderna com **tema escuro**
- **Animação** durante a geração da senha
- Senhas geradas dinamicamente no navegador

## 🖥️ Preview

O usuário pode configurar os critérios da senha e clicar em **Gerar senha** para receber uma combinação aleatória baseada nas opções selecionadas.

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Webpack** (empacotamento dos arquivos)

## ⚙️ Instalação

1. Clone o repositório

```bash
git clone https://github.com/rullpy/password-generator
```

2. Instale as dependências

```bash
pnpm install --frozen-lockfile
```

## 🏃‍♂️ Executando o projeto
- Antes de executar o projeto, crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias.

3. Gere o bundle com Webpack

```bash
pnpm run build
```

4. Execute o projeto

- Liga a API
```bash
pnpm start
```

- Liga o bundler (Webpack)
```bash
pnpm run dev
```

5. Acesse o projeto no navegador
 
```bash
http://localhost:PORT
```

🔒 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos de JavaScript moderno, manipulação do DOM, modularização de código e utilização de ferramentas como Webpack no fluxo de desenvolvimento frontend.
