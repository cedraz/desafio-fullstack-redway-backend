# Setup

Para rodar o projeto, siga os passos abaixo:

## Docker

Primeiro de tudo instale o Docker e o Docker Compose

Caso esteja utilizando ubuntu, é necessário adicionar o sudo antes de qualquer comando envolvendo o docker, exemplo:


`sudo docker ...`

para criar o container, execute o comando:

```sh
sudo docker compose up
```

Caso não deseje que os logs da aplicação apareçam utilize a flag "-d", ela serve para rodar o container em modo "detached", ou seja, em segundo plano, sem mostrar os logs no terminal.

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