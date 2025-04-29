function greet(name) {
  return `Hello, ${name}!`;
}

function greet2() {
  return console.log("Hello, world!");
}

module.exports = {  greet2 };

console.log(greet2());