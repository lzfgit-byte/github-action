const { ensureFileSync } = require('fs-extra');
const { writeFileSync, readFileSync } = require('node:fs');
const { axiosGet } = require('./http');
ensureFileSync('./txt.txt');

// axiosGet('https://www.zhihu.com/billboard').then((res) => {
//   writeFileSync('./txt.txt', res);
// });
module.exports = {};
