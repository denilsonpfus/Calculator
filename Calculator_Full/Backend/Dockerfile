FROM node:9.1.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install eval


# Bundle app source
COPY . .

EXPOSE 9000

# CMD ["node","Calculator.js"]
CMD ["npm","start"]


