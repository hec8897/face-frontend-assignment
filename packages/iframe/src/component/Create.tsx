import React, { useState, useEffect } from 'react';
import { FaceSDK } from '@face/sdk';

function Create() {
  const [sdk] = useState(new FaceSDK());
  const [wallet, setWallet] = useState<string>('');
  const newWallet = async () => {
    const wallet: any = await sdk.createWallet();
    setWallet(wallet.address);
  };
  useEffect(() => {
    newWallet();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        fontSize: '14px',
      }}>
      {wallet}
    </div>
  );
}

export default Create;
