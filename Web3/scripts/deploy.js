
const hre = require("hardhat");

const  main = async () => {
  const Transactions = await hre.ethers.getContractFactory('Transactions')
  const transactions = await Transactions.deploy();
  await transactions.deployed();
  
  console.log(transactions.address , 'deployed')

}

const runMain = async () =>{
  try{
    await main();
    process.exit(0);
  }catch(error){
    process.exitCode = 1;
  }
}

runMain();