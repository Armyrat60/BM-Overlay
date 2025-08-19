#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const USCRIPT_FILE = 'BM-User-Overlay.js';
const ADMINS_FILE = 'admins.json';

function updateVersion() {
  try {
    // Read the userscript file
    let content = fs.readFileSync(USCRIPT_FILE, 'utf8');
    
    // Extract current version
    const versionMatch = content.match(/@version\s+(\d+\.\d+\.\d+)/);
    if (!versionMatch) {
      console.error('Could not find version in userscript');
      return;
    }
    
    const currentVersion = versionMatch[1];
    console.log(`Current version: ${currentVersion}`);
    
    // Increment patch version
    const versionParts = currentVersion.split('.').map(Number);
    versionParts[2] += 1;
    const newVersion = versionParts.join('.');
    
    console.log(`New version: ${newVersion}`);
    
    // Update version in userscript
    content = content.replace(
      /@version\s+\d+\.\d+\.\d+/,
      `@version ${newVersion}`
    );
    
    // Write updated content
    fs.writeFileSync(USCRIPT_FILE, content, 'utf8');
    console.log(`✅ Updated userscript to version ${newVersion}`);
    
    // Update timestamp in admins.json
    updateAdminsTimestamp();
    
  } catch (error) {
    console.error('Error updating userscript:', error);
  }
}

function updateAdminsTimestamp() {
  try {
    // Read admins.json
    let adminsContent = fs.readFileSync(ADMINS_FILE, 'utf8');
    
    // Update timestamp
    const now = new Date().toISOString();
    adminsContent = adminsContent.replace(
      /"updatedAt":\s*"[^"]*"/,
      `"updatedAt": "${now}"`
    );
    
    // Write updated content
    fs.writeFileSync(ADMINS_FILE, adminsContent, 'utf8');
    console.log(`✅ Updated admin list timestamp to ${now}`);
    
  } catch (error) {
    console.error('Error updating admins.json:', error);
  }
}

function showUsage() {
  console.log(`
BM-User-Overlay - Update Script

Usage:
  node update-userscript.js          # Update version and timestamp
  node update-userscript.js --help   # Show this help

This script will:
1. Increment the patch version in the userscript
2. Update the timestamp in admins.json
3. Prepare files for GitHub commit

After running this script:
1. Review the changes: git diff
2. Commit: git add . && git commit -m "Update to version X.X.X"
3. Push: git push origin main
4. GitHub Actions will automatically create a release
`);
}

// Main execution
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  showUsage();
} else {
  updateVersion();
  console.log('\n📝 Next steps:');
  console.log('1. Review changes: git diff');
  console.log('2. Commit: git add . && git commit -m "Update version"');
  console.log('3. Push: git push origin main');
  console.log('4. GitHub Actions will auto-create a release');
}
