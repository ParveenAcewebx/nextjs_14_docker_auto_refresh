FROM node:latest
WORKDIR /app

COPY package*.json .

# Copy the rest of the application code to the working directory
COPY . .

# Install app dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
# CMD ["npm", "build"]
CMD ["npm", "run", "dev"]