// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract  Transactions {
    uint256 transactionCount;
    event Transfer(address from , address receiver , string message , string keyword ,uint amount, uint256 timestamp);
    struct TransferData{
        address sender;
        address receiver;
        uint256 timestamp;
        uint amount;
        string keyword;
        string message;

    }
    TransferData[] transactions;

    function addToblockchain(  address payable  receiver , string memory message , string memory keyword  , uint amount) public {
        transactionCount +=1;
        transactions.push(TransferData(msg.sender , receiver ,  block.timestamp ,amount,message ,keyword   ));
   emit Transfer(msg.sender, receiver, message, keyword, amount, block.timestamp);
    }
      function getAllTransactions() public view returns(TransferData[] memory) {
        return transactions;
    }
      function getTransactionCount() public view returns(uint256) {
        return transactionCount;
    }
}