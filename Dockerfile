FROM node:alpine

RUN npm install -g docsify-cli@latest
RUN mkdir -p /usr/serc/docsify

## Container dnvironment variables
ENV DEBUG 0
ENV PORT 80
ENV DOCSIFY_VERSION latest
ENV NODE_VERSION alpine

# Copy docsify files
COPY . /usr/local/docsify

## Container runtime configuration
EXPOSE 80
WORKDIR /usr/local/docsify

## Container entry point
ENTRYPOINT [ "docsify", "serve", "--port", "80" ]

## Container entry point default arguments
CMD [ "." ]