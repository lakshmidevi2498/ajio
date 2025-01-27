const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? '/' 
  : 'http://localhost:5050/';
export const BASE_URL = allowedOrigins

// current working url
export const STATUS_CODE = {
  INTERNAL_SERVER_ERROR: 500,
  SUCCESS: 200,
};