import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.footer`
  padding: 3rem 0;
  text-align: center;

  .copyright {
    font-size: 1.7rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    .copyright {
      font-size: 1.4rem;
    }
  }
`;


export default function Footer() {
  return (
    <FooterBox>
      <p className="copyright">&copy; 2022 JHui</p>
    </FooterBox>
  );
}
