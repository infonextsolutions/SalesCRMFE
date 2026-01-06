// Use environment variable for API domain, with fallback
export const API_DOMAIN = 
  process.env.NEXT_PUBLIC_API_BASE_URL || 
  "http://82.25.86.78:8102";