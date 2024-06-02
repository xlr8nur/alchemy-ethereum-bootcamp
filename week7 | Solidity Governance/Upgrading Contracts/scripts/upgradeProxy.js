const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x...';

async function main() {
    const VendingMachineV4 = await ethers.getContractFactory('VendingMachineV4');
    const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV4);

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxyAddress
    );

    console.log("The current contract owner is: " + upgraded.owner());
    console.log('Implementation contract address: ' + implementationAddress);
}

main();