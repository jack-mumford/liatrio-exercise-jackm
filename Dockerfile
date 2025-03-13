FROM node:alpine

RUN npm install -g docsify-cli@latest
RUN mkdir -p /user/src/docsify

## Container dnvironment variables
ENV DEBUG 1
ENV PORT 3000
ENV DOCSIFY_VERSION latest
ENV NODE_VERSION alpine

# Copy docsify files
COPY . /usr/src/docsify

## Container runtime configuration
EXPOSE 3000
WORKDIR /user/src/docsify

## Container entry point
ENTRYPOINT [ "docsify", "serve", "--port", "3000" ]

## Container entry point default arguments
CMD [ "." ]