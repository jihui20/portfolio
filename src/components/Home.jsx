import React from 'react';

import styled from 'styled-components';
import Career from './pages/Career';
import Profile from './pages/Profile';
import Skill from './pages/Skill';

const ContentBox = styled.section`
  margin-bottom: 4rem;

  .inner-col {
    width: 1200px;
    margin: 0 auto;
  }

  &.main-col {
    position: relative;
    background-color: #ff7800;
    text-align: center;
    opacity: 0.6;
  }
`;

const MainText = styled.div`
  padding: 8rem 0;
  font-weight: 500;
  font-family: 'Raleway', sans-serif;
  font-size: 6rem;
  color: #fff;
  text-transform: uppercase;

  span {
    display: block;
    font-weight: 800;
    font-size: 10rem;
  }
`;

export default function Home() {
  return (
    <>
      <ContentBox className="main-col">
        <div className="inner-col">
          <MainText>
            <span>LEE JIHUI</span>
            portfilio
          </MainText>
        </div>
      </ContentBox>
      <Profile />
      <Career />
      <Skill />
    </>
  );
}
