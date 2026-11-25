// Writes the one-line entry to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

function buildEntry(): string {
  const mistake = "deleted a fan's comment";
  const coverUp = "apologised to the wrong person";
  const finale = "then deleted the apology too";
  return `My agent ${mistake}, ${coverUp}, ${finale}.`;
}

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, buildEntry(), "utf8");
