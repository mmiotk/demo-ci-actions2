const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(path.join(__dirname))
  .filter(f => f.endsWith(".js") && !f.includes("lint-check"));

let errors = 0;
for (const file of files) {
  const content = fs.readFileSync(path.join(__dirname, file), "utf-8");
  const lines = content.split("\n");
  lines.forEach((line, i) => {
    if (line.includes("console.error")) {
      console.log(`${file}:${i + 1} — found console.error (use proper logging)`);
      errors++;
    }
    if (line.length > 120) {
      console.log(`${file}:${i + 1} — line too long (${line.length} > 120)`);
      errors++;
    }
  });
}

if (errors > 0) {
  console.log(`\nLint: ${errors} error(s) found`);
  process.exit(1);
} else {
  console.log("Lint: OK — no issues found");
}