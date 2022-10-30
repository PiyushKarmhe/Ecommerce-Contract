# Ecommerce-Smart-Contract

See contracts/ecommerce.sol for solidity smart contract

## Smart Contract Design

![Store Smart Contract](https://user-images.githubusercontent.com/88617780/183214510-b49fa78e-7cbb-4633-a497-24363bd88e02.png)

## Process flow
 
 1. Seller of the product will register a product that he wants to sell for whcih he will use "registerPrduct()" function
 2. If the buyer wants to buy a product he'll send ether to the smart contract, will use "payable buy()" function 
 3. once the product has been delivered from seller to buyer then buyer will comfirm the delivery, will use "delivery" function. 
 4. Once the delivery has been confirmed then only the smart contract will transfer ether to the seller. 
 
