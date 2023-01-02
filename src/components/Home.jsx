import React from 'react';

import styled from 'styled-components';
import Career from './pages/Career';
import Profile from './pages/Profile';
import Skills from './pages/Skills';

import CommonStyle from '../assets/style/CommonStyle';

export default function Home() {
  return (
    <>
      <CommonStyle.Section>
        <IntroduceBox>
          <p className="name">
            이지희<span>Lee Ji Hui</span>
          </p>
          <p>
            퍼블리셔로서 처음 시작을 하여 전체적인 사이트 유지 보수 및 프로모션
            작업을 진행하였고, 전체 사이트 리뉴얼을 진행하면서 주문/결제,
            기프트샵, 공지사항 및 이벤트 페이지 등 전체적인 페이지 UI 작업을 한
            경험이 있습니다.
          </p>
          <p>
            야나두에서는 메인 상품을 포함한 여러 페이지들을 운영 및 개발하였고,
            백오피스 사이트 리뉴얼을 위해 부트스트랩을 이용하여 공통 템플릿을
            개발 후 작업자들에게 제공할 수 있도록 했습니다.
            <br />
            또한 프론트엔드로 직무를 전환하여 Jquery로 개발되어 있는 기존 야나두 사이트를 걷어내고,
            React를 이용하여 새롭게 개발하였고, 현재 오픈 후 서비스 중에 있습니다.
          </p>
          <p>
            현재는 위메프에서 메인 사이트 운영 및 개편 작업을 진행중입니다.
          </p>
        </IntroduceBox>
      </CommonStyle.Section>
      <Profile />
      <Career />
      <Skills />
    </>
  );
}

const IntroduceBox = styled.div`
  width: 80%;

  > p {
    font-weight: 300;
    font-size: 1.7rem;
    line-height: 1.5;
    word-break: keep-all;
    text-indent: 1.5rem;

    + p {
      margin-top: 1.5rem;
    }

    &.name {
      display: inline-block;
      position: relative;
      font-weight: 500;
      font-size: 4rem;
      text-indent: 0;
      z-index: 1;

      &::after {
        content: '';
        position: absolute;
        bottom: 1rem;
        left: 0;
        right: 0;
        width: 100%;
        height: 1.2rem;
        background-color: #fd9956;
        z-index: -1;
      }

      span {
        font-weight: 300;
        font-size: 2rem;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;

    > p {
      font-size: 1.5rem;

      &.name {
        font-size: 3.5rem;

        span {
          font-size: 1.7rem;
        }
      }
    }
  }
`;