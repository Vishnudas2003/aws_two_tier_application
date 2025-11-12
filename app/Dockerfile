FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json + package-lock.json first
COPY package*.json ./

# Install dependencies (as root)
RUN npm install --omit=dev

# Copy application files
COPY . .

# Expose port
EXPOSE 3000

# Optional: switch to non-root user if desired
USER node

# Start app
CMD ["node", "server.js"]
