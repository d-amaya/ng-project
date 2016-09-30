FROM debian:stable
MAINTAINER vitavel2001@gmail.com

RUN apt-get update 
RUN apt-get install php5-curl
RUN curl -sL https://deb.nodesource.com/setup_0.12 | -E bash
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential
RUN apt-get install -y locales
RUN apt-get -y install apache2
RUN rm -rf /var/lib/apt/lists/* && localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8

ENV LANG en_US.utf8

RUN cp package.json /usr/src/package.json
RUN npm install
RUN typescript install

RUN cp index.html /var/www/
RUN cp systemjs.config.js /var/www/
RUN cp tsconfig.json /var/www/
RUN cp typings.json /var/www/

RUN cp -R app /var/www/
RUN cp -R assets /var/www/
RUN cp -R default /var/www/
RUN cp -R typings /var/www/

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
