function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = { add, multiply, greet };

if (require.main === module) {
  console.log("CI/CD Demo App v1.0.0");
  console.log(greet("DevOps"));
}