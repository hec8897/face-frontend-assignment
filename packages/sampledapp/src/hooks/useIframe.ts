import { useCallback } from 'react';

const useIframe = () => {
  const postMessage = useCallback(async (value: { key: string; message?: string }) => {
    const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
      input !== null && input.tagName === 'IFRAME';

    const frame = document.getElementById('frame');

    if (isIFrame(frame) && frame.contentWindow) {
      await frame.contentWindow.postMessage(value, 'http://localhost:3001');
    }
  }, []);

  return { postMessage };
};

export default useIframe;
