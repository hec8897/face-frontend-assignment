import React from 'react';

const Footer = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
    <span style={{ fontSize: '12px', color: '#C1CCD6' }}>Powerd by</span>
    <div>
      <img width="16px" src={require('../assets/Subtract.png')} alt="" />
      <img width="77px" src={require('../assets/face_wallet.png')} alt="" />
    </div>
  </div>
);

export default Footer;
