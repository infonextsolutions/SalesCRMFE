This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Docker Deployment

### Prerequisites
- Docker and Docker Compose installed
- Backend API URL

### Configuration

Before deploying, set the API base URL environment variable. You can do this in two ways:

#### Option 1: Using docker-compose.yml (Recommended)
Set the `NEXT_PUBLIC_API_BASE_URL` environment variable in your `docker-compose.yml` or as an environment variable:

```bash
export NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com
docker-compose up --build
```

#### Option 2: Using .env file
Create a `.env` file in the project root:
```
NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com
```

Then build and run:
```bash
docker-compose up --build
```

### Default Configuration
- If `NEXT_PUBLIC_API_BASE_URL` is not set, the app defaults to:
  - Production: `https://salescrmbe.onrender.com`
  - Development: `http://82.25.86.78:8102`

### Important Notes
- The API URL is embedded at build time for Next.js `NEXT_PUBLIC_*` variables
- Make sure your backend API is accessible from the Docker container
- The container exposes port 8103 internally, mapped to 8101 on the host
- If your API is on a different network, ensure proper network configuration in docker-compose.yml

### Troubleshooting API Issues

If APIs are not working after Docker deployment:

1. **Check API URL**: Verify `NEXT_PUBLIC_API_BASE_URL` is set correctly
2. **Network Access**: Ensure the Docker container can reach your API server
3. **CORS**: Make sure your backend API allows requests from your frontend domain
4. **Build Time**: Remember that `NEXT_PUBLIC_*` variables must be set at build time, not runtime

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
