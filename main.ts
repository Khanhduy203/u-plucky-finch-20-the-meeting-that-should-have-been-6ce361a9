const { mkdirSync, readFileSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const ENTRY =
  "An unread email did the work of twelve people in a one-hour meeting.";

if (ENTRY.trim().length === 0) throw new Error("entry must not be empty");
if (ENTRY.length > 200) throw new Error("entry exceeds 200 characters");
if (/[\u0000-\u001f\u007f]/.test(ENTRY))
  throw new Error("entry must not contain control characters");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
if (readFileSync(join(outDir, "entry.txt"), "utf8") !== ENTRY + "\n")
  throw new Error("entry.txt does not match the entry");
