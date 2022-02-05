import React from 'react';
import styled, { css } from 'styled-components';

const MainLayout = styled.main`
  position: relative;
  min-height: 80vh;
  font-size: 1.6rem;
`;

function Main({ children, ...rest }) {
  return <MainLayout {...rest}>{children}</MainLayout>;
}

const SectionLayout = styled.section`
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#fff')};
  padding: 4rem 0;

  .inner {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;
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
  display: ${({ showType }) => (showType ? showType : 'none')};

  ${({ showType }) =>
    showType &&
    css`
      margin-bottom: 2rem;
      font-size: 2rem;
      color: #ff7800;
    `}
`;

function H3({ children, ...rest }) {
  return <H3Style {...rest}>{children}</H3Style>;
}

const IStyle = styled.i`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

function Blind({ children, ...rest }) {
  return <IStyle {...rest}>{children}</IStyle>;
}

const CommonStyle = {
  Main,
  Section,
  H3,
  Blind,
};

export default CommonStyle;
