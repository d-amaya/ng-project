FROM eboraas/apache
MAINTAINER vitavel2001@gmail.com

RUN curl -sL https://deb.nodesource.com/setup_6.x | -E bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential

RUN cp package.json /usr/src/package.json
RUN npm install
RUN typescript install

RUN cp index.html /var/www/html/
RUN cp systemjs.config.js /var/www/html/
RUN cp tsconfig.json /var/www/html/
RUN cp typings.json /var/www/html/

RUN cp -R app /var/www/html/
RUN cp -R assets /var/www/html/
RUN cp -R default /var/www/html/
RUN cp -R typings /var/www/html/

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
