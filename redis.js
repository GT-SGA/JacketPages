let redis = require('redis');

class Redis {

  constructor() {
    this.client = redis.createClient();
    this.client.on('connect', () => {
      console.log('Redis client connected');
    });
  }

  write(key, value) {
    this.client.set(key, value);
  }

  get(key) {
    return this.client.get(key);
  }
}

module.exports = Redis;
