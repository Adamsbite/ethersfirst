   import * as ethers from 'ethers';
const mnemonic: string = 
  'injury manage trade drama violin wrist rack eyebrow patient fiscal stuff clerkk';

const wallet = ethers.Wallet.fromPhrase(mnemonic);
console.log(wallet);
