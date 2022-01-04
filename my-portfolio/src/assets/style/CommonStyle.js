import React from 'react';
import styled from 'styled-components';

const SectionLayout = styled.section`
  .inner {
    width: 1024px;
    margin: 0 auto;
    border: 1px solid red;
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
  font-size: 2rem;
`;

function H3({ children, ...rest }) {
  return <H3Style {...rest}>{children}</H3Style>;
}

const CommonStyle = {
  Section,
  H3,
};

export default CommonStyle;
