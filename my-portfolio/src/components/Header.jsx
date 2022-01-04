import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const HeaderLayout = styled.header`
  background-color: oragne;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    margin: 0 auto;
    border: 1px solid red;
    box-sizing: border-box;
  }

  h1 {
    flex: 0 0 25%;
  }
`;

const NavLayout = styled.nav`
  flex: 0 0 75%;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      flex: 0 1 auto;

      a {
        display: block;
        font-size: 2.5rem;
        padding: 2rem;
        font-weight: 800;
        color: #000;
      }
    }
  }
`;

export default function Header() {
  return (
    <HeaderLayout>
      <div className="inner">
        <h1>지히 로고</h1>
        <NavLayout>
          <ul>
            <li>
              <Link to="">HOME</Link>
            </li>
            <li>
              <Link to="">SKILL</Link>
            </li>
            <li>
              <Link to="">PROJECT</Link>
            </li>
          </ul>
        </NavLayout>
      </div>
    </HeaderLayout>
  );
}
