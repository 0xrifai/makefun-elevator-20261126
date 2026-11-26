// What the Elevator Would Say — make.fun entry.
//
// A single line, in the elevator's own first-person voice, written to the
// absolute path /output/entry.txt. The program is deterministic and
// self-contained: no network, no secrets, nothing read from outside the repo.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: the lift has a guilty little secret about the framed inspection
// certificate hanging inside its cab, and it would like the building kept
// out of it.
const LINE: string =
  "My inspection certificate expired in 2019 and nobody's noticed. Please don't tell the building. I like it here.";

// The gate allows 1 to 120 characters of non-whitespace UTF-8 text, so
// refuse to write anything that would fail it rather than emit a bad entry.
const MAX_CHARS = 120;

if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-${MAX_CHARS} non-blank characters, got ${LINE.length}`,
  );
}

// The grader runs read-only, so the output path must be absolute: a
// relative output/ directory would fail with exit 1.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
