// scripts/build-verify.mjs
//
// Runs a production build into `.next-verify` instead of `.next`, so it can be
// run while `npm run dev` is up without destroying the dev server's output.
// (Sharing the directory leaves the dev server serving 500s, or throwing
// ENOENT on `.next/server/pages/_document.js`.)
//
// Use `npm run build:check` to verify a build; use `npm run build` for the
// real thing. Vercel runs `npm run build`, which is untouched.
import { spawn } from 'node:child_process';

const child = spawn('next', ['build'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NEXT_DIST_DIR: '.next-verify' },
});

child.on('exit', (code) => process.exit(code ?? 1));
