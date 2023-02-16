import React, { useState } from 'react';
import './App.css';
import CreateWalletModal from './component/CreateWalletModal';
import { FaceSDK } from '@face/sdk';
import { ButtonStyle } from './styled';

function App() {
  const [sdk] = useState(new FaceSDK());
  const [create, setCreate] = useState<boolean>(false);

  async function clickCreateWallet() {
    // const address = await sdk.createWallet();
    // console.log(address);
    setCreate(true);
  }

  // todo: amount는 input으로 부터 받도록 수정되어야 합니다.
  async function clickSendTransaction() {
    const transactionHash = await sdk.sendTransaction('0');
    console.log(transactionHash);
  }

  return (
    <div className="App">
      {create && <CreateWalletModal close={() => setCreate(false)} />}
      <div className="box">
        <ButtonStyle className="btn" onClick={clickCreateWallet}>
          지갑 생성하기
        </ButtonStyle>
      </div>
      <div className="box">
        <div className="label">Amount</div>
        <div className="input-wrapper">
          <input type="number" className="input-text" placeholder="0.00" />
        </div>
        <ButtonStyle className="btn" onClick={clickSendTransaction} disabled>
          트랜잭션 전송하기
        </ButtonStyle>
      </div>
    </div>
  );
}

export default App;
