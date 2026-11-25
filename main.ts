const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const ENTRY =
  "An unread email did the work of twelve people in a one-hour meeting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
