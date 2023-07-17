const { ensureFileSync } = require('fs-extra');
const { writeFileSync, readFileSync } = require('node:fs');
ensureFileSync('./txt.txt');
const data = readFileSync('./3.html');
writeFileSync('./txt.txt', data);
module.exports = {};
