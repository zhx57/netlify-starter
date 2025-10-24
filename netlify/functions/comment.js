const http = require('http');
const Waline = require('@waline/vercel');
const serverless = require('serverless-http');

const app = Waline({
  env: 'netlify',
  forbiddenWords: ['习近平', '毛泽东', '中国共产党', '免费节点'],
  async postSave(comment) {
    // do what ever you want after save comment
  },
});

module.exports.handler = serverless(http.createServer(app));
