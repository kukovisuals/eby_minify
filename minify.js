const fs = require('fs');
const UglifyJS = require('uglify-js');
const path = require('path');

// Paths to your source and dist folders
const originalFilePath = path.join(__dirname, 'src', 'script.js');
const minifiedFilePath = path.join(__dirname, 'dist', 'script.min.js');

// Step 1: Read the original JS file
const originalCode = fs.readFileSync(originalFilePath, 'utf8');

// Step 2: Minify the JavaScript code using UglifyJS
const minifiedCode = UglifyJS.minify(originalCode).code;

// Step 3: Write the minified code to the dist folder
fs.writeFileSync(minifiedFilePath, minifiedCode, 'utf8');
console.log('JavaScript file minified successfully.');
