# --------------------------------------------------------------------
# Base image for the development environment
FROM node:lts-alpine AS development

# Set the working directory in the container
WORKDIR /app

# Copying the package files and installing the dependencies
COPY package*.json ./
RUN npm install
RUN npm install @rollup/rollup-linux-x64-musl

# Copying the application source code
COPY . .
COPY .env.development .env

# Building the frontend
RUN npm run build

# Exposing the specific server port and starting up the application
EXPOSE 3000
CMD ["npm", "run", "dev"]

# --------------------------------------------------------------------
# Base image for the production environment
FROM node:lts-alpine AS production

# The metadata for the author of the image
LABEL authors="The CareVantage Company"

# Set the working directory in the container
WORKDIR /app

# Copying the package files and installing the dependencies
COPY package*.json ./
RUN npm ci --only=production
RUN npm install @rollup/rollup-linux-x64-musl

# Copying the application source code
COPY . .
COPY .env.production .env

# Building the frontend
RUN npm run build

# Exposing the specific server port and starting up the application
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]