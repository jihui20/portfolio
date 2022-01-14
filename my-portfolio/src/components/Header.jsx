import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import NavData from '../data/NavData.json';

import styled from 'styled-components';

const HeaderLayout = styled.header`
  position: relative;
  width: 100%;
  height: 6.4rem;
  background-color: #00294f;
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
    color: #fff;
  }

  &.fixed {
    position: fixed;
    top: 0;
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
        font-size: 2rem;
        padding: 2rem;
        font-weight: 800;
        color: #fff;

        &::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 1rem;
          left: 0;
          width: 0;
          height: 0;
          margin: auto;
          background-color: #fcad3d;
        }

        &.active {
          &::after {
            width: 50%;
            height: 0.2rem;
            transition: all 0.3s;
          }
        }
      }
    }
  }
`;

export default function Header() {
  const [scrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    let scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY >= 70) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
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
        <h1>JH</h1>
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
