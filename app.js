const fs = require("fs");
const path = require("path");
const sass = require("sass");

const DIST_DIR = path.join(__dirname, "src");
const DIST_PACKAGES_DIR = path.join(DIST_DIR, "packages");
const SCSS_ENTRY_FILE = path.join(__dirname, "packages", "scss");

function Make_Dist_Directory() {
  if (!fs.existsSync(DIST_DIR, DIST_PACKAGES_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
    fs.mkdirSync(DIST_PACKAGES_DIR, { recursive: true });
    console.log("+ ", DIST_DIR);
    console.log("+ ", DIST_PACKAGES_DIR);
  } else {
    console.log("! ", DIST_DIR);
    console.log("! ", DIST_PACKAGES_DIR);
  }
}

function Compile_SCSS_To_CSS() {
  const SCSS_FILES = fs
    .readdirSync(SCSS_ENTRY_FILE)
    .filter((file) => file.endsWith(".scss"));
  for (const file of SCSS_FILES) {
    const INPUT_PATH = path.join(SCSS_ENTRY_FILE, file);
    const OUTPUT_FILE_NAME = path.join(
      DIST_PACKAGES_DIR,
      file.replace(".scss", ".css")
    );
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

function Ceate_Main_CSS_File() {
  try {
    const OUTPUT_MAIN_CSS = path.join(DIST_DIR, "main.css");
    const MAIN_CSS_TEXT = `@import url("node_modules/zyntraui/zyntra/packages/animation.css");\n@import url("node_modules/zyntraui/zyntra/packages/core.css");\n@import url("node_modules/zyntraui/zyntra/packages/colors.css");\n@import url("node_modules/zyntraui/zyntra/packages/themes.css");\n@import url("node_modules/zyntraui/zyntra/packages/utilities.css");\n`;
    fs.writeFileSync(OUTPUT_MAIN_CSS, MAIN_CSS_TEXT);
    console.log("+ ", OUTPUT_MAIN_CSS);
  } catch (error) {
    console.error("! ", error.message);
  }
}

function main() {
  Make_Dist_Directory();
  Compile_SCSS_To_CSS();
  Ceate_Main_CSS_File();
}

main();
