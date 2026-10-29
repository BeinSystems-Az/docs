FROM node:22-alpine@sha256:fe4f6d74e20370acb04ad889077d14d0f64a9c8ea6a42bc60cddf1e844699914 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --include=dev --ignore-scripts && npm audit --audit-level=high
COPY . .
RUN npm run check
ARG APP_REVISION=local
ARG APP_BUILD_NUMBER=0
ARG APP_BUILD_ATTEMPT=1
RUN printf '{"revision":"%s","build":%s,"attempt":%s}\n' "$APP_REVISION" "$APP_BUILD_NUMBER" "$APP_BUILD_ATTEMPT" > /app/build/release.json

FROM nginxinc/nginx-unprivileged:stable-alpine@sha256:f5116ed4606f3eb015dd4a8e28cb9b351476dc0ad4bc6e9f93b19cec130cdf03
USER root
RUN apk upgrade --no-cache
RUN printf '%s\n' 'server {' '    listen 8080;' '    server_name _;' '    root /usr/share/nginx/html;' '    index index.html;' '    # Cloudflare HTTPS-i burada terminasiya edir; directory redirect-ləri' '    # container-in daxili :8080 ünvanını deyil, nisbi URL-i qaytarmalıdır.' '    absolute_redirect off;' '' '    location = /release.json {' '        add_header Cache-Control "no-store" always;' '        try_files $uri =404;' '    }' '' '    location = /healthz {' '        access_log off;' '        add_header Content-Type text/plain;' '        return 200 '"'"'ok\n'"'"';' '    }' '' '    location ~* \.(?:css|js|mjs|svg|png|jpg|jpeg|gif|ico|woff2?)$ {' '        expires 1y;' '        add_header Cache-Control "public, immutable";' '        try_files $uri =404;' '    }' '' '    location / {' '        try_files $uri $uri/ /index.html;' '    }' '}' > /etc/nginx/conf.d/default.conf
USER 101
COPY --from=build /app/build /usr/share/nginx/html
ARG APP_REVISION=local
LABEL org.opencontainers.image.revision=$APP_REVISION
EXPOSE 8080
