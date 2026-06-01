import test from "node:test";
import assert from "node:assert/strict";
import { mockProvider, runWorkflow } from "../dist/workflow.js";

test("runs a plan execute verify workflow with the mock provider", async () => {
  const result = await runWorkflow("write release notes", mockProvider);

  assert.equal(result.goal, "write release notes");
  assert.equal(result.steps.length, 3);
  assert.equal(result.steps[0].phase, "plan");
  assert.equal(result.steps[2].phase, "verify");
  assert.equal(result.verified, true);
});

test("marks the workflow unverified when verification rejects the output", async () => {
  const provider = {
    async complete(prompt) {
      if (prompt.includes("VERIFY")) {
        return "fail: output is missing evidence";
      }
      return "ok";
    }
  };

  const result = await runWorkflow("draft a changelog", provider);

  assert.equal(result.verified, false);
});
