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
          <MyName>
            이지희<span>Lee Ji Hui</span>
          </MyName>
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
            그리고 회사 내에서 프론트엔드 직무로 전환하여 프론트엔드 개발자로서
            첫 시작을 하였습니다. 이후 Jquery로 개발되어 있는 기존 레거시
            사이트를 걷어내고, React 기반으로 야나두 서비스 전체를 새롭게
            개발하여 현재 서비스 중에 있습니다.
          </p>
          <p>
            위메프에서는 회원, 찜 리스트, 특가 이벤트 등의 관한 운영 개발 및
            유지 보수 작업을 진행했습니다. 또한 기존에 레거시 시스템으로
            되어있는 자주 묻는 질문, 제안하기 페이지들을 Next.js를 기반으로
            새롭게 개발하여 오픈했습니다.
          </p>
          <p>
            현재는 키다리스튜디오에서 아랍, 일본, 한국을 대상으로 한 글로벌
            플랫폼을 담당하여 오픈하였고, 앱 개발자와 함께 태국, 대만의 웹뷰
            파트를 개발하고있습니다.
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
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;

    > p {
      font-size: 1.5rem;
    }
  }
`;

const MyName = styled.h2`
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

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3.5rem;

    span {
      font-size: 1.7rem;
    }
  }
`;
