// Use environment variable for API base URL, with fallback for development
// For Docker/production, set NEXT_PUBLIC_API_BASE_URL environment variable
// Example: NEXT_PUBLIC_API_BASE_URL=http://82.25.86.78:8102
export const baseUrl = 
  process.env.NEXT_PUBLIC_API_BASE_URL || 
  process.env.NODE_ENV === 'production' 
    ? "http://82.25.86.78:8102" 
    : "http://82.25.86.78:8102";
