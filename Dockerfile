# pull lean version of NODE running on Alpine LINUX
#FROM node:9.2.0-alpine
FROM mhart/alpine-node:0.10

# Create directory inside the container
WORKDIR /usr/src/app

# Copy package.json for NPM to run the build script and evaluation.js (program) to create the image
COPY package.json ./
COPY Evaluation.js ./

# install npm; assign port 9000 to container; run command npm start to run script in package.json tagged with start to evalauation.js
#RUN npm i express body-parser cors eval 
RUN npm install --production
EXPOSE 9000
CMD ["npm","start"]


