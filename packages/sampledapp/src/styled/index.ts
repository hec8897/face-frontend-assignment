import styled from 'styled-components';

const ButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  background: #0026f5;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  width: 328px;
  &:disabled {
    background: #dce1e8;
    color: #9fabbd;
  }
`;

const SubTitleStyle = styled.h2`
  margin: 0;
`;

const TextStyle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export { ButtonStyle, SubTitleStyle, TextStyle };
