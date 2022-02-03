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
      margin-right: 2rem;

      &.active {
        button {
          /* font-weight: 800; */
          color: #ff7800;

          /* &::before {
            border-color: #ff7800;
          } */
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

      /* &::before {
        content: '';
        display: inline-block;
        width: 0.9rem;
        height: 0.5rem;
        margin: 0.3rem 0.5rem 0 0;
        border: 0.2rem solid #fff;
        border-top: 0;
        border-right: 0;
        vertical-align: top;
        transform: rotate(-45deg);
      } */
    }
  }
`;

export default function Tab({ activeTab, handleActiveTab }) {
  return (
    <TabBox>
      <ul>
        <li className={activeTab === 'yanadoo' ? 'active' : null}>
          <button type="button" onClick={() => handleActiveTab('yanadoo')}>
            <span>야나두</span>
          </button>
        </li>
        <li className={activeTab === 'soonsoo' ? 'active' : null}>
          <button type="button" onClick={() => handleActiveTab('soonsoo')}>
            <span>순수교육</span>
          </button>
        </li>
      </ul>
    </TabBox>
  );
}
