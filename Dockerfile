# Use the official Node.js image from the Docker Hub, version 16.20.2-alpine
FROM node:16.20.2-alpine

# Set the working directory inside the container
WORKDIR /user/src/index

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 80 to the outside world
EXPOSE 80

# Command to run the application
CMD ["node", "index.js"]
