# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies needed for native modules
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies (sharp is included in package.json)
RUN npm install --legacy-peer-deps && npm cache clean --force

# Copy source code
COPY . .

# Set environment variables
ENV SKIP_PREFLIGHT_CHECK=true
ENV NODE_ENV=production
ENV GENERATE_SOURCEMAP=false
# API base URL - can be overridden at runtime via docker-compose or docker run
# Default to production API URL if not provided
ARG NEXT_PUBLIC_API_BASE_URL=http://82.25.86.78:8102
ENV NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}

# Build Next.js application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies for sharp (image optimization library)
RUN apk add --no-cache libc6-compat vips-dev

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from build stage
# Copy public folder
COPY --from=build --chown=nextjs:nodejs /app/public ./public

# Copy standalone build output (sharp is already included from build stage)
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 8103

ENV PORT=8103
ENV HOSTNAME="0.0.0.0"

# Start Next.js server
CMD ["node", "server.js"]
