const redis = require('redis');

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

  get(key, cb) {
    this.client.get(key, cb);
  }

  remove(key) {
    this.client.del(key);
  }

  incr(key) {
    console.log('incrementing ', key);
    this.client.incr(key);
  }
}

module.exports = Redis;
