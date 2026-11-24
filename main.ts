import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  // Winner D4 (25/25, from 20 drafts): the letter you never sent, read aloud
  // at his funeral twenty years later. Beats runner-up D19 (grandmother's
  // recipe, also 25/25) because line 2 is one sharp, decisive scene — the
  // truest thing anyone says that day — instead of a warm but general state.
  "Don't throw away the letter you wrote to your father and never sent.\n" +
  "Twenty years later you will read it aloud at his funeral, and it will be the truest thing anyone says that day.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
