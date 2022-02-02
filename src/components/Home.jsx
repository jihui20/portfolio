import React from 'react';

import styled from 'styled-components';
import Career from './pages/Career';
import Profile from './pages/Profile';
import Skill from './pages/Skill';

const ContentBox = styled.section`
  .inner-col {
    width: 1200px;
    margin: 0 auto;
  }

  &.main-col {
    position: relative;
    /* min-height: 80vh; */
    background-color: #6b735c;
    text-align: center;
  }
`;

const MainText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 36rem;
  margin: auto;
  font-weight: 800;
  font-family: 'Raleway', sans-serif;
  font-size: 15rem;
  color: #1f2426;
  text-transform: uppercase;
`;

export default function Home() {
  return (
    <>
      {/* <ContentBox className="main-col">
        <div className="inner-col">
          <MainText>
            <span>
              jh
              <br />
              portfilio
            </span>
          </MainText>
        </div>
      </ContentBox> */}
      <Profile />
      <Career />
      <Skill />
    </>
  );
}
