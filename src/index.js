// index.js
const { createAgent } = require('./agent');
const { deployContract } = require('./contract');

console.log("Welcome to ZenthosAI - Starting Application...");

// Start by deploying the smart contract
deployContract().then(() => {
  console.log("Smart contract deployed successfully!");
  // Create and launch an AI agent
  createAgent();
}).catch(error => {
  console.error("Error during deployment or agent creation:", error);
});
