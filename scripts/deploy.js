const { ethers, upgrades } = require("hardhat");

async function main() {
  const Token= await ethers.getContractFactory("testContract");

  console.log("Deploying Token...");

  const TokenDeploy = await upgrades.deployProxy(Token);
  await TokenDeploy.deployed();

  console.log("Token Contract deployed to:", TokenDeploy.address);
}

main();
