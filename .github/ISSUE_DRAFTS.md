# Issue Drafts

These are real backlog items intended for GitHub issues after the repository is published.

## Add a file-editing dry-run workflow example

### Problem

The current example demonstrates plan, execute, and verify with text only. It does not show how a workflow could handle file edits safely.

### Proposed change

Add an example that proposes a file edit, previews the change, and verifies it without mutating files by default.

### Acceptance criteria

- The default path is dry-run only.
- The example shows proposed before and after content.
- Tests verify that no file is modified during dry-run.

### Labels

`enhancement`, `examples`

## Add an optional real provider adapter

### Problem

The repository intentionally defaults to a mock provider, but users may want to see how to plug in a real model provider.

### Proposed change

Add an optional provider adapter behind an environment-variable check while keeping the mock provider as the default.

### Acceptance criteria

- No API key is required for tests or demos.
- README clearly explains that the real provider is optional.
- Missing environment variables produce a clear message.

### Labels

`enhancement`, `help wanted`

## Add structured workflow event output

### Problem

The CLI prints readable text, but downstream tools may need structured workflow events.

### Proposed change

Add a `--json` mode that returns the goal, steps, and verification status as JSON.

### Acceptance criteria

- JSON output is parseable.
- Text output remains the default.
- Tests cover JSON mode.

### Labels

`enhancement`, `good first issue`

## Expand verification examples

### Problem

Verification is currently represented as a simple pass/fail provider response. Real workflows often need concrete evidence checks.

### Proposed change

Add examples for verifying command output, required fields, or expected text in an artifact.

### Acceptance criteria

- At least one example verifies structured evidence.
- The example is runnable without network access.
- README links to the new example.

### Labels

`examples`, `verification`
