setTimeout(() => process.exit(), 4000);
process.on("exit", () => {
  console.log("Exit process now.");
});
console.log("hello web-programming-lab");