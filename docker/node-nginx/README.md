# Desafio Nginx e Node.js

Este desafio consiste em criar uma aplicação que use o Nginx como proxy reverso para uma aplicação Node.js e um banco de dados MySQL. Quando um usuário acessa o Nginx, ele faz uma chamada para a aplicação Node.js, que adiciona um registro no banco de dados MySQL e retorna uma mensagem "Full Cycle Rocks!" para o Nginx. A lista de nomes cadastrados no banco de dados também será exibida.

Para cumprir esse desafio, eu criei as seguintes imagens docker: 
- uma imagem MySQL com um script de criação de tabela;
- uma imagem Nginx com configuração de proxy reverso e uma página personalizada de erro 502;
- uma imagem Node.js que contém a aplicação que adiciona um registro no banco de dados MySQL quando é acessada.

Em seguida, eu configurei o arquivo docker-compose para gerenciar as dependências entre as imagens e garantir que o Node.js aguarde o MySQL estar disponível antes de iniciar.

Para executar a aplicação, basta executar o seguinte comando na pasta raiz:

docker-compose up -d

A aplicação estará disponível no endereço http://localhost:8000/

## Estrutura de pastas e arquivos
.

├── docker-compose.yml

├── nginx

│   ├── Dockerfile

│   ├── default.conf


│   └── html

│       └── 502.html

├── mysql

│   ├── Dockerfile

│   └── create_table.sql

└── node

│   ├── Dockerfile

│   ├── index.js

│   ├── package.json

Cada pasta contém os arquivos específicos para cada imagem Docker:

A pasta "nginx" contém o arquivo Dockerfile, a configuração do proxy reverso e uma página personalizada de erro 502.

A pasta "mysql" contém o arquivo Dockerfile e o script de criação da tabela.

A pasta "node" contém o arquivo Dockerfile, o arquivo principal da aplicação Node.js e o arquivo package.json.

Eu também incluí novamente a informação de que o arquivo docker-compose.yml é responsável por gerenciar as dependências entre as imagens e garantir que o Node.js aguarde o MySQL estar disponível antes de iniciar.
