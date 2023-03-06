let proxyAddress = "0x00000000";

async function main() {
  console.log(proxyAddress, " Original Token(proxy) address");
  const tokenContract = await ethers.getContractFactory("testContract");
  console.log("Upgrade to token V2... address proxy");
  const newToken = await upgrades.upgradeProxy(proxyAddress, tokenContract);
  console.log("tokenContract at:", newToken.address);

  console.log('implementation updated. :)')
 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
