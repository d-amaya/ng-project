FROM node:latest
MAINTAINER vitavel2001@gmail.com

# Add package.json to allow for caching
RUN cp package.json /usr/src/package.json
# Install app dependencies
RUN npm install
# Bundle app source and tests
RUN cp app.js /usr/src/
RUN cp test /usr/src/test
RUN cp script /usr/src/script
# user to non-privileged user
USER nobody
# Expose the application port and run application
EXPOSE 5000
CMD [“node”,”app.js”]
