import {ethers} from "ethers"
async function getData(address: string){
    const provider = ethers.getDefaultProvider("mainnet");
    const balance = await provider.getBalance(address);
    const transactionCount = await provider.getTransactionCount(address);
console.log(ethers.formatEther(balance))
console.log(transactionCount)
}

getData('0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85')
getData('0xf4bfaf916a68b0fC859D63a319034C0f72A88a5C')
getData('0x3b138FC7eC06B2A44565994CfDe5134A75915995')


async function knowAccountType(address:string) {
    const provider = ethers.getDefaultProvider("mainnet");
    const code = await provider.getCode(address);
    if (code === '0x') {
        console.log("this is a an a EOA account");
    }else{
        console.log("this is a smart contracts")
    }

    
}

knowAccountType('0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85');
knowAccountType('0xf4bfaf916a68b0fC859D63a319034C0f72A88a5C');
knowAccountType('0x3b138FC7eC06B2A44565994CfDe5134A75915995');

