# Contributing to AKI

Thank you for your interest in contributing! Here's how to get started.

## Prerequisites

- Node.js 20 LTS or later
- Yarn 4 (Berry) — run `corepack enable` once to activate it
- Ollama with a model pulled (e.g. `ollama pull phi3`)
- poppler-utils (`pdftotext` / `pdftoppm`)

## Setting up the development environment

```bash
git clone https://github.com/goldlabelapps/aki.git
cd aki
corepack enable
yarn install
```

## Running in development mode

**Terminal 1 — Ollama**
```bash
ollama serve
ollama run phi3
```

Or run everything at once:
```bash
yarn start
```

## Making changes

1. Fork the repository and create a feature branch from `main`:
   ```bash
   git checkout -b feat/my-feature
   ```
2. Make your changes with small, focused commits.
3. Open a Pull Request against `main` with a clear description of what you
   changed and why.

## Code style

- Keep comments concise; prefer self-documenting code.

## Reporting bugs

Please open a GitHub Issue with:
- Steps to reproduce
- Expected vs actual behaviour
- Your OS, Node version, and Ollama version

## Swapping the LLM model

The default model is `phi3`. To use a different one:

1. Pull it: `ollama pull <model-name>`
2. Update the `yarn phi3` script in the root `package.json` (or add a new one)
3. Update `start.mjs` to call the new script

## License

By contributing you agree that your contributions will be licensed under the
[MIT License](./LICENSE).
