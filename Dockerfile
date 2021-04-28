FROM node:13
# Create app directory
WORKDIR /usr/

ENV DATABASE_HOST="db"
ENV DATABASE_PORT=5432
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 4000

CMD [ "npm", "run", "start:dev" ]