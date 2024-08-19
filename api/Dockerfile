FROM node:20.15-buster
LABEL maintainer="Stanislav Bidenko <steve.bidenko@gmail.com>"
COPY ./ops/infinitive-loop-1s.sh /
WORKDIR /app
RUN chown node:node /app
USER node
RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
# RUN ls -al .
RUN npm install --location=global typescript && \
  npm install --location=global @types/node && \
  npm install --location=global rimraf && \
  npm install --location=global @nestjs/cli
RUN mkdir api src
COPY --chown=node:node package*.json .npmrc .env /app/
COPY --chown=node:node api/package*.json api/nest-cli.json api/tsconfig*.json api/src /app/api/
COPY --chown=node:node src /app/src/
RUN npm install
WORKDIR /app/src
RUN npm install && npm run build
WORKDIR /app/api
RUN npm install && npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]