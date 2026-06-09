const fs = require('fs');

const configPath = 'config/default.json';
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

if (!config.qaAccount || !config.qaAccount.username) {
  console.error('Missing QA account configuration');
  process.exit(1);
}

console.log(`Configuration OK for ${config.appName}`);
