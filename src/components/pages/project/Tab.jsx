import React from 'react';
import styled from 'styled-components';

export default function Tab({ activeTab, handleActiveTab }) {
  return (
    <TabBox>
      <ul>
        <li className={activeTab === 'Wemakeprice' ? 'active' : null}>
          <button type="button" onClick={() => handleActiveTab('Wemakeprice')}>
            <span>위메프</span>
          </button>
        </li>
        <li className={activeTab === 'Yanadoo' ? 'active' : null}>
          <button type="button" onClick={() => handleActiveTab('Yanadoo')}>
            <span>야나두</span>
          </button>
        </li>
        <li className={activeTab === 'Soonsoo' ? 'active' : null}>
          <button type="button" onClick={() => handleActiveTab('Soonsoo')}>
            <span>순수교육</span>
          </button>
        </li>
      </ul>
    </TabBox>
  );
}

const TabBox = styled.div`
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2rem;

    li {
      flex: 0 1 auto;
      position: relative;
      margin-right: 2rem;

      &.active {
        button {
          color: #fd9956;
        }
      }
    }

    button {
      display: block;
      padding: 1.5rem 0;
      font-weight: 300;
      font-size: 1.5rem;
      color: #000;
      text-align: left;
      box-sizing: border-box;
    }
  }
`;