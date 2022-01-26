import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const TabBox = styled.div`
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2rem;

    li {
      flex: 0 1 auto;
      position: relative;

      &.active {
        &::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.6rem;
          margin: auto;
          background-color: #828c6d;
        }

        a {
          font-weight: 800;
        }
      }
    }

    a {
      display: block;
      padding: 1.5rem;
      color: #1f2426;
      box-sizing: border-box;
    }
  }
`;

export default function Tab({ activeTab }) {
  return (
    <TabBox>
      <ul>
        <li className={activeTab === 'soonsoo' ? 'active' : null}>
          <Link to="/project/soonsoo">순수교육</Link>
        </li>
        <li className={activeTab === 'yanadoo' ? 'active' : null}>
          <Link to="/project/yanadoo">야나두</Link>
        </li>
      </ul>
    </TabBox>
  );
}
