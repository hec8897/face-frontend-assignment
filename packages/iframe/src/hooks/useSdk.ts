import { useCallback, useState } from 'react';
import { FaceSDK } from '@face/sdk';

interface IWallet {
  address?: string;
}
const useSdk = () => {
  const [sdk] = useState(new FaceSDK());

  const createWallet = useCallback(() => sdk.createWallet(), [sdk]);
  const setStorage = useCallback((wallet: IWallet) => sdk.setStorage(wallet), [sdk]);

  return { createWallet, setStorage };
};

export default useSdk;
