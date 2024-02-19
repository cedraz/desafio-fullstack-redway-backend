# Setup

Para rodar o projeto, siga os passos abaixo:

## Docker

Primeiro de tudo instale o Docker e o Docker Compose

Caso esteja utilizando ubuntu, é necessário adicionar o sudo antes de qualquer comando envolvendo o docker, exemplo:


`sudo docker ...`

para criar o container, execute o comando:

```sh
sudo docker compose up -d
```

o "-d" serve para rodar o container em modo "detached", ou seja, em segundo plano, sem mostrar os logs no terminal.

para checar todos os containers criados:

```sh
sudo docker ps -a
```

para checar os containers que estão rodando:

```sh
sudo docker ps
```

para rodar o container:

```sh
sudo docker compose start api-redway-pg
```

caso queira parar o container:

```sh
sudo docker compose stop
```

caso queira remover o container:

```sh
sudo docker compose down
```

## API

A API foi feita em Node.js, utilizando o framework Fastify, e o banco de dados PostgreSQL.

Para rodar a API, é necessário ter o Node.js instalado na máquina.

Primeiro, instale as dependências do projeto executando o comando:

```sh
npm install
# ou
npm i
```

Depois, crie um arquivo .env na raiz do projeto, seguindo as variáveis presente no arquivo .env.example.

Carregue o schema do banco de dados, executando o comando:

```sh
npx prisma generate
```

Crie a migration do banco de dados, executando o comando:

```sh
npx prisma migrate dev
```

para rodar a API em desenvolvimento, execute o comando:

```sh
npm run start:dev
```

Após rodar a API, acesse a documentação da API em:

http://localhost:3333/docs