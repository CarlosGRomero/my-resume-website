FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code to the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Expose port 80 to the outside world
EXPOSE 80

# Serve the built application using serve
CMD ["npx", "serve", "-s", "build"]
