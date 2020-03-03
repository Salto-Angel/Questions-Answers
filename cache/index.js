const Promise = require("bluebird");
const redis = require("redis");

const cl = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});
Promise.promisifyAll(cl);

module.exports = cl;
