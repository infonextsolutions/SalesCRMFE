# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies needed for native modules
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps && npm cache clean --force

# Copy source code
COPY . .

# Set environment variables
ENV SKIP_PREFLIGHT_CHECK=true
ENV NODE_ENV=production
ENV GENERATE_SOURCEMAP=false

# Build Next.js application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from build stage
# Copy public folder
COPY --from=build --chown=nextjs:nodejs /app/public ./public

# Copy standalone build output
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

EXPOSE 8103

ENV PORT=8103
ENV HOSTNAME="0.0.0.0"

# Start Next.js server
CMD ["node", "server.js"]
