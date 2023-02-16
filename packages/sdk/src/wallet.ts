import { ethers } from 'ethers';

export class Wallet {
  private wallet: any;

  async createWallet(): Promise<string> {
    this.wallet = ethers.Wallet.createRandom();
    return this.wallet;
  }
}
