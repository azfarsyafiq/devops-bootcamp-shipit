#!/usr/bin/env node
// Preflight checks and test runner for the launchpad config validator.
import { spawn } from 'child_process';

const proc = spawn('node', ['--test', 'src/ship-schema.test.mjs'], {
  cwd: new URL('..', import.meta.url).pathname,
  stdio: 'inherit'
});

proc.on('exit', (code) => {
  process.exit(code);
});
