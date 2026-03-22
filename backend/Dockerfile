FROM node:20

WORKDIR /root/backend_nodejs
# không cần đặt giống tên FRONT END với NGINX

COPY package.json .

RUN yarn config set network-timeout 3000000
#dành riêng cho môi trường production => ngăn timeout

RUN yarn install
# Chạy tạm thời nhưng không kích hoạt gì hết => tải thư viện về

COPY . .

EXPOSE 8088

CMD ["node", "server.js"]
# Chạy không tạm thời, giữ nguyên terminal