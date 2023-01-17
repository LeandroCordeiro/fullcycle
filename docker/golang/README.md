# Desafio Go Lang

Este desafio consiste em criar uma imagem Docker que imprime "Full Cycle Rocks!!" quando executada.

Para cumprir este desafio, eu escrevi um programa em Go que imprime "Full Cycle Rocks!!" na tela. Em seguida, criei uma imagem Docker a partir deste programa e publiquei-a no Docker Hub com o nome "lecordeiro/fullcycle-golang".

Para executar a imagem, você pode usar o seguinte comando:

docker run lecordeiro/fullcycle-golang

A imagem também está disponível no seguinte endereço: https://hub.docker.com/repository/docker/lecordeiro/fullcycle-golang, com data de expiração em 01/06/2023.

Esse desafio foi emocionante, especialmente porque eu nunca havia trabalhado com a linguagem Go antes. Foi uma ótima oportunidade para aprender mais sobre a linguagem e sobre a criação de imagens Docker.

# Estrutura de pastas
A estrutura de pastas para esse projeto é a seguinte:

.
├── Dockerfile
└── main.go


- A pasta raiz contém o arquivo Dockerfile.
- O arquivo "main.go" é o arquivo principal do programa Go.

# Como construir a imagem
Para construir a imagem, basta executar o seguinte comando na pasta raiz:
docker build -t lecordeiro/fullcycle-golang .

# Como publicar a imagem
Para publicar a imagem no Docker Hub, você precisa fazer login no Docker Hub e executar o seguinte comando:
docker push lecordeiro/fullcycle-golang
