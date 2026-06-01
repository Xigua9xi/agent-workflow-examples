import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

let failures = 0;

async function walk(dir) {
  let entries = [];
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (/\.(ts|mjs|md)$/.test(entry.name)) {
      const text = await readFile(fullPath, "utf8");
      if (text.includes("OPENAI_API_KEY=")) {
        console.error(`${fullPath}: do not commit concrete API keys`);
        failures += 1;
      }
    }
  }
}

for (const root of ["src", "test", "examples"]) {
  await walk(root);
}

process.exitCode = failures === 0 ? 0 : 1;
