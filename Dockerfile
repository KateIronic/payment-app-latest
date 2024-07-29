FROM node:latest

WORKDIR /user/apps/web

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/dev" ]