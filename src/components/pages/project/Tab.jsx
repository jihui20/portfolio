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
        button {
          font-weight: 800;
          color: #ff7800;
        }
      }
    }

    button {
      display: block;
      padding: 1.5rem;
      color: #000;
      font-size: 2rem;
      box-sizing: border-box;
    }
  }
`;

export default function Tab({ activeTab, handleActiveTab }) {
  return (
    <TabBox>
      <ul>
        <li className={activeTab === 'yanadoo' ? 'active' : null}>
          {/* <Link to="/project/yanadoo">야나두</Link> */}
          <button type="button" onClick={() => handleActiveTab('yanadoo')}>
            <span>야나두</span>
          </button>
        </li>
        <li className={activeTab === 'soonsoo' ? 'active' : null}>
          {/* <Link to="/project/soonsoo">순수교육</Link> */}
          <button type="button" onClick={() => handleActiveTab('soonsoo')}>
            <span>순수교육</span>
          </button>
        </li>
      </ul>
    </TabBox>
  );
}
