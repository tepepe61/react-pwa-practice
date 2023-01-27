FROM node:16.15.0-alpine
RUN mkdir /react-todo-pwa-practice
# コンテナ内のpwdはreact-todo-pwa-practice。そして、volumesの:右側と名前が違うと両方できる。
# volumesの:左側で指定したでローカルディレクトリの内容がコンテナ内にも反映される
WORKDIR /react-todo-pwa-practice