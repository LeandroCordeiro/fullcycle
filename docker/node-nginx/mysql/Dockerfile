FROM mysql:8.0
ENV MYSQL_ROOT_PASSWORD mypassword
COPY ./mysql/create_table.sql /docker-entrypoint-initdb.d/
