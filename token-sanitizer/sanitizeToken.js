const fs = require('fs');

// Step 1: Read the raw token from token.txt
const rawToken = fs.readFileSync('token.txt', 'utf8');

// Step 2: Sanitize by removing newline characters and trimming spaces
const cleanToken = rawToken.replace(/[\r\n]+/g, '').trim();

// Step 3: Output the cleaned token to the console
console.log('✅ Cleaned Token:', cleanToken);
fs.writeFileSync('../.env', `AUTH_TOKEN=${cleanToken}\n`, { flag: 'a' });
require('dotenv').config(); // Load environment variables from .env

console.log('🔐 AUTH_TOKEN from .env:', process.env.AUTH_TOKEN);
fs.writeFileSync('../.env', `AUTH_TOKEN=${cleanToken}\n`, { flag: 'a' });
