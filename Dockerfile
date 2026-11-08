FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
RUN printf 'server {\n listen 8080;\n root /usr/share/nginx/html;\n location /assets/ { add_header Cache-Control "public, max-age=31536000, immutable"; }\n location / { try_files $uri $uri/ /index.html; }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 8080
