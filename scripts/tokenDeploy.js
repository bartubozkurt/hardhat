const { ethers } = require("hardhat");

async function main() {

  const Lib = await ethers.getContractFactory("IterableMappingUpgradeable");
  const lib = await Lib.deploy();
  await lib.deployed();

  const DividendTracker = await ethers.getContractFactory("DividendTracker",{
    libraries: {
      IterableMappingUpgradeable: lib.address,
    }
  });
  console.log("Deploying DividendTracker...");
  const dividendTracker = await upgrades.deployProxy(DividendTracker,{
    unsafeAllowLinkedLibraries: true
  });
  await dividendTracker.deployed();
  console.log("DividendTracker deployed at", dividendTracker.address);

  const SmartContract = await ethers.getContractFactory(
    "testContract",
  );
  console.log("Deploying xx...");

  const Sc = await upgrades.deployProxy(SmartContract);
  console.log("SmartContract deployed to:", Sc.address);

  const tx = await dividendTracker.transferOwnership(Sc.address);
  await tx.wait();
  console.log("DividendTracker ownership transferred to SmartContract");
  await cOOKIE.updateDividendTracker(dividendTracker.address);
  console.log("DividendTracker address updated in SmartContract");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
