# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A TypeScript library for form validation using JavaScript Proxy. Uses Deno as the runtime.

## Development Commands

```bash
# Enter development shell (auto-generates .mcp.json)
nix develop

# Format all files (Nix and TypeScript)
nix fmt

# Check formatting in CI mode
nix fmt -- --ci

# Lint TypeScript
deno lint

# Run tests
deno test

# Run a single test file
deno test path/to/test.ts
```

## Tech Stack

- **Runtime**: Deno
- **Build System**: Nix flakes with flake-parts
- **Formatting**: treefmt-nix (nixfmt for .nix, deno fmt for TypeScript)
