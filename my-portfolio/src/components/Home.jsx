import React from 'react';

import styled from 'styled-components';

const ContentBox = styled.section`
  .inner-col {
    width: 1200px;
    margin: 0 auto;
  }

  &.main-col {
    min-height: 80vh;
    background-color: #f2d5d5;
  }
`;

export default function Home() {
  return (
    <>
      <ContentBox className="main-col">
        <p>홈</p>
      </ContentBox>
      <ContentBox className="main-col">
        <p>홈</p>
      </ContentBox>
      <ContentBox className="main-col">
        <p>홈</p>
      </ContentBox>
      <ContentBox className="main-col">
        <p>홈</p>
      </ContentBox>
    </>
  );
}
