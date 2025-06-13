const fs = require("fs");
const path = require("path");
const sass = require("sass");

const DIST_DIR = path.join(__dirname, "dist");
const SCSS_ENTRY_FILE = path.join(__dirname, "packages", "scss");

function Make_Dist_Directory() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
    console.log("+ ", DIST_DIR);
  } else {
    console.log("! ", DIST_DIR);
  }
}

function Compile_SCSS_To_CSS() {
  const SCSS_FILES = fs
    .readdirSync(SCSS_ENTRY_FILE)
    .filter((file) => file.endsWith(".scss"));
  for (const file of SCSS_FILES) {
    const INPUT_PATH = path.join(SCSS_ENTRY_FILE, file);
    const OUTPUT_FILE_NAME = path.join(DIST_DIR, file.replace(".scss", ".css"));
    const OUTPUT_PATH = path.join(OUTPUT_FILE_NAME);

    try {
      const COMPILER = sass.compile(INPUT_PATH);
      console.log("+ ", INPUT_PATH, "->", OUTPUT_PATH);
      fs.writeFileSync(OUTPUT_PATH, COMPILER.css);
    } catch (error) {
      console.error("! ", error.message);
    }
  }
}

function main() {
  Make_Dist_Directory();
  Compile_SCSS_To_CSS();
}

main();
