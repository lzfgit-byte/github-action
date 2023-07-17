const { ensureFileSync } = require('fs-extra');
const { writeFileSync, readFileSync } = require('node:fs');
const { axiosGet } = require('./http');
ensureFileSync('./txt.txt');
// const data = readFileSync('./3.html');
// writeFileSync('./txt.txt', data);
// axiosGet('https://www.baidu.com').then((res) => {
//   console.log('res', res);
//   writeFileSync('./txt.txt', res);
// });
setTimeout(() => {
  writeFileSync('./txt.txt', '123456wwwwasdasd');
}, 30000);
module.exports = {};
