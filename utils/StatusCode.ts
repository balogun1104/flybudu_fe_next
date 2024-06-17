// src/utils/statusCodes.ts

export const StatusCodes = {
    // 2xx Success
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
  
    // 3xx Redirection
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    NOT_MODIFIED: 304,
  
    // 4xx Client Errors
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
  
    // 5xx Server Errors
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
  } as const;
  
  export type StatusCode = typeof StatusCodes[keyof typeof StatusCodes];