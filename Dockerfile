FROM ubuntu:latest
MAINTAINER d-amaya <roldaniel89@gmail.com> 

RUN apt-get update
RUN apt-get install curl
RUN apt-get -y install apache2
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get -y install nodejs
RUN apt-get -y install npm


RUN npm config set registry http://registry.npmjs.org/
RUN npm install -g typescript
RUN chmod 777 /usr/local/bin/tsc
RUN sed -i -e 's/\/usr\/bin\/env node/\/usr\/bin nodejs/g' /usr/local/bin/tsc
RUN ln -s "$(which nodejs)" /usr/bin/node

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
