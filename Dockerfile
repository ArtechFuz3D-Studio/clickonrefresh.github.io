FROM nginx:latest

RUN apt-get install node
RUN apt-get install npm
RUN npm install
RUN npm run dev

# EXPOSE 7744:80
VOLUME /:/usr/share/nginx/html
