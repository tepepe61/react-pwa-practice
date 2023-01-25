FROM node:16.15.0-alpine
RUN mkdir /react-todo-pwa-practice
# コンテナ内のpwdはreact-todo-pwa-practice。そして、volumesで.:してるのでDcokerfileと同じ層のものがコンテナ内にある。
WORKDIR /react-todo-pwa-practice