// Cross-platform launcher for AKI°
// please test on macOS, Linux, and Windows.

import { spawn } from 'child_process';
import open from 'open';

const isWindows = process.platform === 'win32';
const shell = isWindows ? 'cmd' : 'sh';
const shellFlag = isWindows ? '/c' : '-c';

/**
 * Spawn a yarn script as a child process, inheriting stdio so all output
 * flows through to the current terminal.
 */
function runScript(script) {
  console.log(`AKI° ${script}`);
  const child = spawn(shell, [shellFlag, `yarn ${script}`], {
    stdio: 'inherit',
    cwd: process.cwd(),
  });
  child.on('error', (err) => {
    console.error(`AKI° Failed to start "yarn ${script}":`, err.message);
  });
  return child;
}

// Start Ollama server and the chosen model
runScript('ollama');

// Switch the comment below to use a different model
runScript('phi3');
// runScript('codellama');
