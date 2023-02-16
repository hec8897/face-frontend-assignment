import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 360px;
  min-height: 250px;
  background-color: #fff;
  border-radius: 10px;
  padding: 32px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const ModalBackGround = ({ children }: { children: ReactNode }) => (
  <ModalBackground>
    <ModalBox>{children}</ModalBox>
  </ModalBackground>
);

const Portal = ({ children }: { children: ReactNode }) => {
  const element = typeof window !== 'undefined' && document.querySelector('#modal');
  return element && children
    ? ReactDOM.createPortal(<ModalBackGround>{children}</ModalBackGround>, element)
    : null;
};

export default Portal;
