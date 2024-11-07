Claro! Aqui está o conteúdo em formato de `README.md`:


# Formulário de Contato

Este é um projeto simples de formulário de contato, onde o frontend foi desenvolvido utilizando **Bootstrap**, **HTML** e **jQuery**, enquanto o backend é uma aplicação **Node.js** que salva as informações de contato em um banco de dados **MySQL**.

## Funcionalidade

O formulário de contato coleta informações do usuário e envia para o backend, que processa os dados e os armazena em um banco de dados MySQL. O projeto está **dockerizado**, o que significa que você pode facilmente rodar a aplicação utilizando Docker e Docker Compose.

## Como rodar o projeto

1. **Clonar o repositório**:
   Clone o repositório para a sua máquina local.

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA_DO_PROJETO>


   Isso irá iniciar os containers do Docker e a aplicação estará rodando.

## Dependências do projeto

Antes de rodar o projeto, você precisará instalar algumas dependências utilizando o Yarn:

1. **Instalar as dependências do Yarn**:

   No diretório do projeto, execute o comando:

   ```bash
   yarn install
   ```

2. **Instalar o `cors`**:

   Para lidar com problemas de CORS, instale o pacote `cors`:

   ```bash
   yarn add cors
   ```

3. **Instalar o `express`**:

   O `express` é usado para gerenciar as rotas da aplicação:

   ```bash
   yarn add express
   ```

4. **Instalar o `sequelize`**:

   O `sequelize` é o ORM utilizado para interagir com o banco de dados MySQL:

   ```bash
   yarn add sequelize
   ```

5. **Instalar o `mysql2`**:

   O pacote `mysql2` é necessário para que o Sequelize se conecte ao banco de dados MySQL:

   ```bash
   yarn add mysql2
   ```
6. **Construir as imagens Docker**:
   Utilize o Docker Compose para construir as imagens.

   ```bash
   docker-compose build
   ```

7. **Rodar a aplicação**:
   Após construir as imagens, você pode rodar o projeto com o seguinte comando:

   ```bash
   docker-compose up
   ```
## Estrutura do projeto

- **Frontend**: Contém o formulário de contato desenvolvido com **Bootstrap**, **HTML** e **jQuery**.
- **Backend**: Um servidor **Node.js** utilizando **Express** para gerenciar as rotas e o **Sequelize** para interagir com o banco de dados **MySQL**.
- **Banco de dados**: O MySQL está configurado via Docker e armazena os dados enviados pelo formulário de contato.

## Como funciona

1. O usuário preenche o formulário de contato no frontend.
2. O formulário envia os dados para o backend (Node.js), onde são processados.
3. O backend utiliza o Sequelize para armazenar os dados no banco de dados MySQL.

## Tecnologias utilizadas

- **Frontend**: HTML, Bootstrap, jQuery
- **Backend**: Node.js, Express, Sequelize, MySQL
- **Docker**: Para a containerização da aplicação

## Observações

- Certifique-se de que o Docker e o Docker Compose estejam corretamente instalados na sua máquina antes de rodar o projeto.
- Para evitar problemas de CORS, o middleware `cors` foi adicionado ao projeto.
- O Sequelize foi configurado para se conectar ao MySQL, mas você pode precisar ajustar as configurações do banco de dados, como usuário e senha, no arquivo de configuração.

---

Se você encontrar algum problema ou tiver dúvidas, fique à vontade para abrir uma *issue* no repositório.
```
