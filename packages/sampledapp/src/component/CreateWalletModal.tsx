import React, { useEffect } from 'react';
import Portal from './modal';
import { ButtonStyle, SubTitleStyle, TextStyle } from '../styled';
import Footer from './Footer';

const CreateWalletModal = ({ close }: { close: () => void }) => {
  const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
    input !== null && input.tagName === 'IFRAME';

  const onClick = async () => {
    const frame = document.getElementById('frame');
    if (isIFrame(frame) && frame.contentWindow) {
      await frame.contentWindow.postMessage({ key: 'new' }, '*');
    }
  };
  useEffect(() => {
    window.addEventListener('message', (e) => {
      if (e.data.functionName === 'sussess') {
        close();
      }
    });
  }, []);

  return (
    <Portal>
      <SubTitleStyle>Success!</SubTitleStyle>
      <TextStyle>Your wallet is now ready</TextStyle>
      <div
        style={{
          borderRadius: '10px',
          overflow: 'hidden',
          width: '100%',
          background: '#FAFBFC',
        }}>
        <iframe
          id="frame"
          width="100%"
          height="100%"
          frameBorder="0"
          src="http://localhost:3001/new"
        />
      </div>
      <ButtonStyle onClick={onClick}>Close</ButtonStyle>
      <Footer />
    </Portal>
  );
};

export default CreateWalletModal;
