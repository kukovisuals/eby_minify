# JavaScript Minification Project

This project provides a simple workflow for managing JavaScript source code, keeping an original copy for development and generating a minified version for production using Node.js and UglifyJS.

## Project Structure

/your-project │ ├── /src │ └── script.js # Original JavaScript file for development │ ├── /dist │ └── script.min.js # Minified JavaScript file for production │ ├── minify.js # Node.js script to minify JS files ├── package.json # NPM dependencies and project configuration ├── .gitignore # Git ignore file to manage files └── node_modules # NPM modules (after running npm install)



### How It Works

1. **Original JavaScript Files:**
   - All development work happens in the `/src` directory, where the original JavaScript files reside.
   
2. **Minified Files:**
   - The `minify.js` script takes the JavaScript files from `/src` and generates a minified version, placing it in the `/dist` directory.

3. **Gitignore:**
   - The `/dist` folder (containing the minified files) and the `node_modules` folder are ignored by Git, as the minified files can be generated when needed, and `node_modules` can be reinstalled with `npm install`.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) must be installed on your machine.
- The project uses UglifyJS for minification. You can install the necessary dependencies by running:

```bash
npm install

Run the following command to minify the files:

node minify.js
