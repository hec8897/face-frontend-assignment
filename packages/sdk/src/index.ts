// import { Iframe } from './iframe';
import { Wallet } from './wallet';

interface IWallet {
  address?: string;
}

export class FaceSDK {
  // private iframe: Iframe;
  private wallet: Wallet;
  // private walletStorage: any;

  constructor() {
    // this.iframe = new Iframe('http://localhost:3001');
    this.wallet = new Wallet();
    // this.walletStorage = window.localStorage.getItem('wallet');
  }

  // todo: iframe을 활용하여 로그인 페이지를 띄우고 지갑을 생성하세요.
  // iframe안에서 private key를 랜덤으로 생성하고 iframe의 local storage에 저장하고 private key의 public address를 SDK에 전달합니다.
  // 만약 이미 local storage에 private key가 존재한다면 private key를 생성하지 않고 private key의 public address를 SDK에 전달합니다.
  async createWallet(): Promise<IWallet> {
    const walletStorage = await window.localStorage.getItem('wallet');
    if (walletStorage) {
      return JSON.parse(walletStorage);
    } else {
      const wallet = await this.wallet.createWallet();
      return wallet;
    }
  }

  async setStorage(wallet: any) {
    const walletStorage = await window.localStorage.getItem('wallet');
    if (!walletStorage) {
      window.localStorage.setItem('wallet', JSON.stringify(wallet));
    }
  }

  // todo: iframe을 활용하여 트랜잭션 전송 페이지를 띄우고 지갑을 생성하세요.
  // iframe안에서 private key가 local storage에 존재하지 않는다면 error를 발생시킵니다.
  // local storage에 저장된 private key를 활용하여 트랜잭션을 서명하고 전송합니다.
  // 트랜잭션이 채굴될때까지 기다린다음 TransactionHash를 리턴합니다.
  async sendTransaction(amount: string): Promise<string> {
    alert('implement me');
    return 'transactionHash';
  }
}
