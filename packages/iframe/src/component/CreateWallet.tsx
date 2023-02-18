import React, { useState, useEffect } from 'react';
import useSdk from '../hooks/useSdk';
import useIframe from '../hooks/useIfame';

interface IWallet {
  address?: string;
}

function Create() {
  const { createWallet, setStorage } = useSdk();
  const { postMessage } = useIframe();
  const [wallet, setWallet] = useState<IWallet>({});

  const newWallet = async () => {
    const wallet: IWallet = await createWallet();
    setWallet(wallet);
  };

  useEffect(() => {
    if (wallet) {
      window.addEventListener('message', (e) => {
        if (e.data.key === 'new') {
          setStorage(wallet);
          postMessage({ key: 'sussess' });
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
