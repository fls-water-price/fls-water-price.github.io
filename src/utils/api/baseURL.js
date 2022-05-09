export const baseURL =
  process.env.NODE_ENV === "production"
    ? "http://ec2-52-90-156-242.compute-1.amazonaws.com/api/v1"
    : "http://localhost:3001/api/v1";