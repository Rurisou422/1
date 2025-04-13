const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Running post-install script to fix missing modules...');

// Check if ajv is installed
try {
  require.resolve('ajv');
  console.log('ajv is installed.');
} catch (e) {
  console.log('ajv is not installed. Installing...');
  execSync('npm install --no-save ajv@8.12.0', { stdio: 'inherit' });
}

// Check if the specific module path exists
try {
  require.resolve('ajv/dist/compile/codegen');
  console.log('ajv/dist/compile/codegen module is available.');
} catch (e) {
  console.log('ajv/dist/compile/codegen module is not available. Installing specific version...');
  execSync('npm install --no-save ajv@8.12.0', { stdio: 'inherit' });
  
  // If still not available, try to create symlink or fix path
  try {
    require.resolve('ajv/dist/compile/codegen');
  } catch (err) {
    console.log('Module still not available. Creating directory structure if needed...');
    
    const nodeModulesPath = path.resolve('./node_modules');
    const ajvPath = path.join(nodeModulesPath, 'ajv');
    const distPath = path.join(ajvPath, 'dist');
    const compilePath = path.join(distPath, 'compile');
    
    if (!fs.existsSync(compilePath)) {
      console.log('Creating directory structure...');
      if (!fs.existsSync(ajvPath)) fs.mkdirSync(ajvPath, { recursive: true });
      if (!fs.existsSync(distPath)) fs.mkdirSync(distPath, { recursive: true });
      if (!fs.existsSync(compilePath)) fs.mkdirSync(compilePath, { recursive: true });
    }
    
    console.log('Done with directory creation.');
  }
}

console.log('Post-install script completed.'); 