import { useCallback } from 'react';

const useIframe = () => {
  const postMessage = useCallback(
    (value: { key: string; message?: string }) =>
      window.parent.postMessage(value, 'http://localhost:3000'),
    []
  );

  return { postMessage };
};

export default useIframe;
