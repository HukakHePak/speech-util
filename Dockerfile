FROM node:16-slim as build
COPY . .
RUN npm i && npm run pkg

FROM scratch
COPY --from=build app .
CMD ["./app"] 