// Laugh Track — The Crypto Trading Joke
// One line, under 200 characters, about crypto and trading life.
// The program writes the joke to /output/entry.txt and nothing else.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "My trading strategy is simple: buy high, panic-sell low, then tell the group chat I did it on purpose for the tax loss.";

const MAX_CHARS = 200;

function main(): void {
  const text = JOKE.trim();
  if (text.length === 0) {
    throw new Error("entry is empty");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, over the ${MAX_CHARS} cap`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  // Create the output directory if it is missing; never remove it,
  // the grader mounts it and deleting it fails the run.
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  // Read the file back and confirm what was actually written matches.
  const written = readFileSync("/output/entry.txt", "utf8");
  if (written !== text) {
    throw new Error("written entry does not match the joke");
  }
  console.log(`Wrote ${written.length}-character entry to /output/entry.txt`);
}

main();
