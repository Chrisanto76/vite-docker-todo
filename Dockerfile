FROM node:18

WORKDIR /usr/src/app/vite-react

# RUN installe nginx
# COPY nginx.conf /chemin vers nginx.conf
# RUN lance nginx avec daemon

COPY package*.json ./

ADD . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]