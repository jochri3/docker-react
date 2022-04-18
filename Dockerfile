#Multi step process
# 1 -  Build phase
FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# 2 - Run phase

FROM nginx
WORKDIR /usr/share/nginx/html
#This is for prod : Elastic beanstalk => port that receives incoming trafic
EXPOSE 80 
COPY --from=builder /app/build ./




# /app/build <- Production build
