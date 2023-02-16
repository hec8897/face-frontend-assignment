import React from 'react';
import Portal from './modal';
import { ButtonStyle, SubTitleStyle, TextStyle } from '../styled';
import Footer from './Footer';

const CreateWalletModal = ({ close }: { close: () => void }) => {
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
        <iframe width="100%" height="100%" frameBorder="0" src="http://localhost:3001/new" />
      </div>
      <ButtonStyle onClick={close}>Close</ButtonStyle>
      <Footer />
    </Portal>
  );
};

export default CreateWalletModal;
