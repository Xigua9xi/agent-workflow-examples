# agent-workflow-examples

English | [简体中文](README.zh-CN.md)

`agent-workflow-examples` demonstrates a simple plan -> execute -> verify loop using a mock provider by default.

The project is intentionally small. It shows how an agent workflow can be represented as explicit phases without requiring API keys, external model providers, or network access.

## What This Includes

- A mock provider with the same shape as a real completion provider.
- A `runWorkflow(goal, provider)` function.
- A CLI demo.
- Tests for successful verification and failed verification.

## What This Does Not Do

- It does not call any real model API.
- It does not edit files.
- It does not implement a full agent framework.
- It does not hide failed verification.

## Quickstart

```powershell
npm.cmd install
npm.cmd test
npm.cmd run lint
npm.cmd run demo
```

## CLI Usage

```powershell
npm.cmd run build
node dist/cli.js "summarize release notes"
```

## Directory Guide

```text
src/
```

Workflow runner, provider interface, mock provider, and CLI entrypoint.

```text
test/
```

Tests for pass and fail verification outcomes.

```text
examples/
```

Markdown example describing the mock workflow.

```text
scripts/
```

Local lint checks.

## Workflow Model

The workflow has three phases:

1. `plan`: define how to approach the goal.
2. `execute`: produce output based on the plan.
3. `verify`: decide whether the output passes the stated check.

The result contains the goal, each step, and a `verified` boolean.

## How To Extend

Good extension points:

- Add `--json` output.
- Add a file-editing dry-run example.
- Add optional real provider adapters while keeping mock as default.
- Add evidence-based verification examples.

See `.github/ISSUE_DRAFTS.md` for ready-to-copy issue drafts.

## Publishing Notes

Before publishing:

- Run `npm.cmd test`.
- Run `npm.cmd run lint`.
- Do not commit `node_modules/` or `dist/`.
- Do not add required API keys to the default demo path.
