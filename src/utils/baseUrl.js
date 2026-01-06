// Use environment variable for API base URL, with fallback for development
// For Docker/production, set NEXT_PUBLIC_API_BASE_URL environment variable
// Example: NEXT_PUBLIC_API_BASE_URL=http://82.25.86.78:8102
const getBaseUrl = () => {
  let url = process.env.NEXT_PUBLIC_API_BASE_URL || "http://82.25.86.78:8102";
  // Ensure URL ends with a slash for proper concatenation
  return url.endsWith('/') ? url : url + '/';
};

export const baseUrl = getBaseUrl();

// Debug log (only in browser, not in SSR)
if (typeof window !== 'undefined') {
  console.log('API Base URL:', baseUrl);
}
