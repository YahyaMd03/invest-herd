import Redis from 'ioredis';

// Create a single Redis instance (singleton)
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

export default redis;
