FROM ubuntu:latest
MAINTAINER d-amaya <roldaniel89@gmail.com> 

RUN apt-get update
RUN apt-get -y install apache2
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN npm install -g typescript

RUN ln -s /usr/local/bin/nodejs /usr/bin/node

COPY app /var/www/html/app
COPY assets /var/www/html/assets
COPY typings /var/www/html/typings
COPY index.html /var/www/html/
COPY package.json /var/www/html/
COPY systemjs.config.js /var/www/html/
COPY tsconfig.json /var/www/html/
COPY typings.json /var/www/html/

WORKDIR /var/www/html/
RUN npm install
RUN npm run tsc

EXPOSE 80
EXPOSE 443

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
