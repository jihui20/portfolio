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
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#fff')};
  padding: 4rem 0 10rem;

  .inner {
    width: 1024px;
    margin: 0 auto;
    /* border: 1px solid red; */
  }
`;

function Section({ children, ...rest }) {
  console.log({ ...rest });
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
