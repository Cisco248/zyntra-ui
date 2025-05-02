"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var fs = require("fs");
var path = require("path");
var sass = require("sass");
var DIST_DIR = path.join(__dirname, "dist");
var DIST_PACKAGES_DIR = path.join(DIST_DIR, "packages");
var SCSS_ENTRY_FILE = path.join(__dirname, "packages", "scss");
// const SOURCE_CONFIG_FILE = path.join(__dirname, "zyntra.config.js");
// const DEST_CONFIG_FILE = path.join(DIST_DIR, "zyntra.config.js");

function Make_Dist_Directory() {
  if (!fs.existsSync(DIST_DIR, DIST_PACKAGES_DIR)) {
    fs.mkdirSync(DIST_DIR, {
      recursive: true
    });
    fs.mkdirSync(DIST_PACKAGES_DIR, {
      recursive: true
    });
    console.log("+ ", DIST_DIR);
    console.log("+ ", DIST_PACKAGES_DIR);
  } else {
    console.log("! ", DIST_DIR);
    console.log("! ", DIST_PACKAGES_DIR);
  }
}
function Compile_SCSS_To_CSS() {
  var SCSS_FILES = fs.readdirSync(SCSS_ENTRY_FILE).filter(function (file) {
    return file.endsWith(".scss");
  });
  var _iterator = _createForOfIteratorHelper(SCSS_FILES),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var file = _step.value;
      var INPUT_PATH = path.join(SCSS_ENTRY_FILE, file);
      var OUTPUT_FILE_NAME = path.join(DIST_PACKAGES_DIR, file.replace(".scss", ".css"));
      var OUTPUT_PATH = path.join(OUTPUT_FILE_NAME);
      try {
        var COMPILER = sass.compile(INPUT_PATH);
        console.log("+ ", INPUT_PATH, "->", OUTPUT_PATH);
        fs.writeFileSync(OUTPUT_PATH, COMPILER.css);
      } catch (error) {
        console.error("! ", error.message);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function Copy_Config_File() {
  try {
    if (!fs.existsSync(SOURCE_CONFIG_FILE)) {
      console.error("! ", SOURCE_CONFIG_FILE);
      return;
    }
    if (!fs.existsSync(DEST_CONFIG_FILE)) {
      fs.copyFileSync(SOURCE_CONFIG_FILE, DEST_CONFIG_FILE);
      console.log("+ ", DEST_CONFIG_FILE);
    } else {
      console.log("! ", DEST_CONFIG_FILE);
    }
  } catch (error) {
    console.error("! ", error.message);
  }
}
function Ceate_Main_CSS_File() {
  try {
    var OUTPUT_MAIN_CSS = path.join(DIST_DIR, "main.css");
    var MAIN_CSS_TEXT = "@import url(\"node_modules/zyntraui/zyntra/packages/animation.css\");\n@import url(\"node_modules/zyntraui/zyntra/packages/core.css\");\n@import url(\"node_modules/zyntraui/zyntra/packages/colors.css\");\n@import url(\"node_modules/zyntraui/zyntra/packages/themes.css\");\n@import url(\"node_modules/zyntraui/zyntra/packages/utilities.css\");\n";
    fs.writeFileSync(OUTPUT_MAIN_CSS, MAIN_CSS_TEXT);
    console.log("+ ", OUTPUT_MAIN_CSS);
  } catch (error) {
    console.error("! ", error.message);
  }
}
function main() {
  Make_Dist_Directory();
  Compile_SCSS_To_CSS();
  // Copy_Config_File();
  Ceate_Main_CSS_File();
}
main();