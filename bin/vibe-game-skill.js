#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const packageRoot = path.resolve(__dirname, '..');
const skillsRoot = path.join(packageRoot, 'skills');

function usage(exitCode = 0) {
  const text = `vibe-game-skill

Usage:
  vibe-game-skill list
  vibe-game-skill install <skill-name> [--target <directory>] [--force]

Defaults:
  target = $CODEX_HOME/skills when CODEX_HOME is set
           ~/.codex/skills otherwise

Examples:
  vibe-game-skill list
  vibe-game-skill install game-concept-refiner
  vibe-game-skill install game-concept-refiner --target ~/.claude/skills
`;
  console.log(text);
  process.exit(exitCode);
}

function listSkills() {
  if (!fs.existsSync(skillsRoot)) return [];
  return fs.readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => fs.existsSync(path.join(skillsRoot, name, 'SKILL.md')))
    .sort();
}

function expandHome(value) {
  if (value === '~') return os.homedir();
  if (value.startsWith(`~${path.sep}`) || value.startsWith('~/')) {
    return path.join(os.homedir(), value.slice(2));
  }
  return path.resolve(value);
}

function defaultTarget() {
  const codexHome = process.env.CODEX_HOME
    ? expandHome(process.env.CODEX_HOME)
    : path.join(os.homedir(), '.codex');
  return path.join(codexHome, 'skills');
}

function parseInstallArgs(args) {
  const result = { name: null, target: defaultTarget(), force: false };
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (!result.name && !arg.startsWith('-')) {
      result.name = arg;
    } else if (arg === '--target') {
      const value = args[i + 1];
      if (!value) throw new Error('--target requires a directory.');
      result.target = expandHome(value);
      i += 1;
    } else if (arg === '--force') {
      result.force = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return result;
}

function installSkill(args) {
  const options = parseInstallArgs(args);
  if (!options.name) throw new Error('Missing skill name.');

  const source = path.join(skillsRoot, options.name);
  if (!fs.existsSync(path.join(source, 'SKILL.md'))) {
    const available = listSkills().join(', ') || '(none)';
    throw new Error(`Unknown skill "${options.name}". Available: ${available}`);
  }

  const destination = path.join(options.target, options.name);
  if (fs.existsSync(destination)) {
    if (!options.force) {
      throw new Error(`Destination already exists: ${destination}\nUse --force to replace it.`);
    }
    fs.rmSync(destination, { recursive: true, force: true });
  }

  fs.mkdirSync(options.target, { recursive: true });
  fs.cpSync(source, destination, { recursive: true });
  console.log(`Installed ${options.name} to ${destination}`);
}

function main() {
  const [command, ...args] = process.argv.slice(2);
  if (!command || command === 'help' || command === '--help' || command === '-h') usage(0);
  if (command === 'list') {
    for (const name of listSkills()) console.log(name);
    return;
  }
  if (command === 'install') {
    installSkill(args);
    return;
  }
  throw new Error(`Unknown command: ${command}`);
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
