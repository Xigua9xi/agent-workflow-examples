export interface Provider {
  complete(prompt: string): Promise<string>;
}

export type WorkflowPhase = "plan" | "execute" | "verify";

export interface WorkflowStep {
  phase: WorkflowPhase;
  prompt: string;
  output: string;
}

export interface WorkflowResult {
  goal: string;
  steps: WorkflowStep[];
  verified: boolean;
}

export const mockProvider: Provider = {
  async complete(prompt: string): Promise<string> {
    if (prompt.startsWith("PLAN")) {
      return "Plan: define the output, perform the task, then check evidence.";
    }
    if (prompt.startsWith("EXECUTE")) {
      return "Executed: produced a concise result for the requested goal.";
    }
    return "pass: output includes a plan, execution result, and verification note.";
  }
};

export async function runWorkflow(goal: string, provider: Provider = mockProvider): Promise<WorkflowResult> {
  const planPrompt = `PLAN\nGoal: ${goal}`;
  const plan = await provider.complete(planPrompt);

  const executePrompt = `EXECUTE\nGoal: ${goal}\nPlan: ${plan}`;
  const execution = await provider.complete(executePrompt);

  const verifyPrompt = `VERIFY\nGoal: ${goal}\nPlan: ${plan}\nOutput: ${execution}`;
  const verification = await provider.complete(verifyPrompt);

  return {
    goal,
    steps: [
      { phase: "plan", prompt: planPrompt, output: plan },
      { phase: "execute", prompt: executePrompt, output: execution },
      { phase: "verify", prompt: verifyPrompt, output: verification }
    ],
    verified: verification.trim().toLowerCase().startsWith("pass")
  };
}
