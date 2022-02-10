import React from 'react';
import styled from 'styled-components';

import CommonStyle from '../../assets/style/CommonStyle';

const ProfileBox = styled.dl`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  dt {
    flex: 0 1 auto;
    width: 10%;
    margin-bottom: 2.5rem;
    font-weight: 800;
  }

  dd {
    flex: 0 1 auto;
    width: 90%;
    margin-bottom: 2.5rem;
    font-weight: 300;

    p {
      line-height: 1.5;
    }

    span {
      display: inline-block;
      margin-right: 1rem;
      font-weight: 500;
      z-index: 1;
    }
  }

  a {
    display: inline-block;
    position: relative;
    color: #000;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.5rem;
      left: 0;
      right: 0;
      width: 100%;
      height: 0.5rem;
      background-color: #fd9956;
      z-index: -1;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.4rem;

    dt {
      width: 20%;
    }

    dd {
      width: 80%;
    }
  }
`;

export default function Profile() {
  return (
    <CommonStyle.Section>
      <CommonStyle.H3 showType="block">profile</CommonStyle.H3>
      <ProfileBox>
        <dt>연락처</dt>
        <dd>010&ndash;9109&ndash;0479</dd>
        <dt>이메일</dt>
        <dd>dlwlgml20@gmail.com</dd>
        <dt>Link</dt>
        <dd>
          <p>
            <span>포트폴리오</span>
            <a href="https://github.com/jihui20/portfolio" target="_blank">
              GitHub
            </a>
          </p>
          <p>
            <span>스터디</span>
            <a href="https://github.com/jihui20/react-project" target="_blank">
              GitHub
            </a>
            , &nbsp;
            <a
              href="https://splashy-people-e87.notion.site/4247662e7d3a478c8d17fb2df311685c?v=75578465dd8443b8be8e3c570bbb3a95"
              target="_blank"
            >
              Notion
            </a>
          </p>
        </dd>
      </ProfileBox>
    </CommonStyle.Section>
  );
}
