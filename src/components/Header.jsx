import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NavData from '../data/NavData.json';

import styled from 'styled-components';

const HeaderLayout = styled.header`
  position: relative;
  width: 100%;
  height: 7.9rem;
  background-color: #fff;
  transition: all 0.3s;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  h1 {
    flex: 0 0 25%;
    font-size: 3.5rem;
    color: #ff7800;
    text-transform: uppercase;

    span {
      font-size: 2rem;
    }
  }

  &.fixed {
    position: fixed;
    top: 0;
    box-shadow: 0rem 0rem 0.6rem rgba(0, 0, 0, 0.1);
    z-index: 10;
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
        position: relative;
        font-size: 1.6rem;
        padding: 3rem 2rem;
        font-weight: 300;
        color: #000;

        &.active {
          color: #ff7800;
        }
      }
    }
  }
`;

export default function Header() {
  const [scrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    let scrollY = window.scrollY || document.documentElement.scrollTop;

    setScrollActive(scrollY > 40);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <HeaderLayout className={scrollActive ? 'fixed' : ''}>
      <div className="inner">
        <h1>
          jh<span>ui</span>
        </h1>
        <NavLayout>
          <ul>
            {NavData &&
              NavData.map((list) => {
                return (
                  <li key={list.sortNum}>
                    <NavLink
                      to={{
                        pathname: list.path,
                      }}
                      className={({ isActive }) =>
                        'nav-link' + (isActive ? ' active' : '')
                      }
                    >
                      {list.title}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </NavLayout>
      </div>
    </HeaderLayout>
  );
}
