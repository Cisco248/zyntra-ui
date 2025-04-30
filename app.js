const { error } = require("console");
const fs = require("fs");
const path = require("path");
const sass = require("sass");

function installUIFramework() {
  try {
    console.log("Running UI-Framework Installation");
    console.log("Converting scss to css");
    const scssFilePath = sass.compile("packages/scss/core.scss");
    fs.mkdirSync("C:/Users/lahir/Desktop/UI-Framework-/dist/packages", {
      recursive: true,
    });
    fs.writeFileSync(
      "C:/Users/lahir/Desktop/UI-Framework-/dist/packages/core.css",
      scssFilePath.css
    );
    const sourceTailwindConfig = path.join(__dirname, "uif.config.js");
    const destTailwindConfig = path.join(__dirname, "dist", "uif.config.js");
    fs.copyFileSync(sourceTailwindConfig, destTailwindConfig);
    console.log("UI-Framework Installation Completed");
  } catch (error) {
    console.error(error.message);
  }
}

installUIFramework();
