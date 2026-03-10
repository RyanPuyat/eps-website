# # Use Node.js base image
# FROM node:20-alpine

# # Set working directory
# WORKDIR /app

# # Copy package files first (better caching)
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy rest of the app
# COPY . .

# # Build Next.js app
# RUN npm run build

# # Expose Next.js default port
# EXPOSE 3000

# # Start Next.js
# CMD ["npm", "start"]

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy only dependency files first (better caching)
COPY package*.json ./

#Copy Prisma

COPY prisma ./prisma



# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Production runtime
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Start Next.js
CMD ["npm", "start"]


