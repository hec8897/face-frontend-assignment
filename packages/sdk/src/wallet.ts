import { ethers } from 'ethers';

interface IWallet {
  address?: string;
}
export class Wallet {
  private wallet: any;

  async createWallet(): Promise<IWallet> {
    this.wallet = ethers.Wallet.createRandom();
    return this.wallet;
  }
}
