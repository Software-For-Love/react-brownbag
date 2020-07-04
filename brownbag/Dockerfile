# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /brownbag

# install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# add app
COPY . ./

# start app
CMD ["yarn", "start"]

