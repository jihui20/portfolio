import React from 'react';

import styled from 'styled-components';
import Career from './pages/Career';
import Profile from './pages/Profile';
import Skills from './pages/Skills';

const ContentBox = styled.section`
  margin-bottom: 4rem;

  .inner {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  &.main {
    position: relative;
    background-color: #fd9956;
    text-align: center;
  }
`;

const MainText = styled.div`
  padding: 8rem 0;
  font-weight: 500;
  /* font-family: 'Raleway', sans-serif; */
  font-size: 6rem;
  color: #fff;
  text-transform: uppercase;

  span {
    display: block;
    font-weight: 800;
    font-size: 10rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 4rem;

    span {
      font-size: 6rem;
    }
  }
`;

export default function Home() {
  return (
    <>
      <ContentBox className="main">
        <div className="inner">
          <MainText>
            <span>LEE JIHUI</span>
            portfolio
          </MainText>
        </div>
      </ContentBox>
      <Profile />
      <Career />
      <Skills />
    </>
  );
}
