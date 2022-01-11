import React from 'react';
import styled from 'styled-components';

const MainLayout = styled.section`
  position: relative;
  min-height: 80vh;
  font-size: 1.6rem;
`;

function Main({ children, ...rest }) {
  return <MainLayout {...rest}>{children}</MainLayout>;
}

const SectionLayout = styled.section`
  .inner {
    width: 1024px;
    margin: 0 auto;
    /* border: 1px solid red; */
  }
`;

function Section({ children, ...rest }) {
  return (
    <SectionLayout {...rest}>
      <div className="inner">{children}</div>
    </SectionLayout>
  );
}

const H3Style = styled.h3`
  display: none;
`;

function H3({ children, ...rest }) {
  return <H3Style {...rest}>{children}</H3Style>;
}

const CommonStyle = {
  Main,
  Section,
  H3,
};

export default CommonStyle;
