import React, { useState, useEffect } from 'react';
import { FaceSDK } from '@face/sdk';

interface IWallet {
  address?: string;
}

function Create() {
  const [sdk] = useState(new FaceSDK());
  const [wallet, setWallet] = useState<IWallet>({});

  const newWallet = async () => {
    const wallet: any = await sdk.createWallet();
    setWallet(wallet);
  };

  useEffect(() => {
    if (wallet) {
      window.addEventListener('message', (e) => {
        if (e.data.key === 'new') {
          sdk.setStorage(wallet);
          window.parent.postMessage({ functionName: 'sussess' }, '*');
        }
      });
    }
  }, [wallet]);

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
      {wallet?.address}
    </div>
  );
}

export default Create;
