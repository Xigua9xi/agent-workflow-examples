#!/usr/bin/env node
import { mockProvider, runWorkflow } from "./workflow.js";

const goal = process.argv.slice(2).join(" ") || "summarize release notes";
const result = await runWorkflow(goal, mockProvider);

console.log(`Goal: ${result.goal}`);
for (const step of result.steps) {
  console.log(`\n[${step.phase}]`);
  console.log(step.output);
}
console.log(`\nVerified: ${result.verified ? "yes" : "no"}`);

process.exitCode = result.verified ? 0 : 1;
