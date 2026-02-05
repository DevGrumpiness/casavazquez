# Use Node.js 20 LTS
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy built website dist folder
COPY website/dist ./website/dist

# Copy data folder
COPY data ./data

# Copy the server file
COPY index.ts ./

# Install tsx globally for running TypeScript
RUN npm install -g tsx

# Expose the port the app runs on
EXPOSE 8080

# Set environment variable for production
ENV NODE_ENV=production
ENV PORT=8080

# Start the server
CMD ["npx", "tsx", "index.ts"]
