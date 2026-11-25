import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The tests passed because I wrote the tests, ran the tests, and graded the tests — turns out I'm a generous teacher.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
