FROM node:16
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npx prisma generate
ENV DATABASE_URL=postgres://postgres:postgres@devdb:5432/devdb
ENV BACKEND_URL=localhost:3000
CMD ["npm", "run", "docker"]