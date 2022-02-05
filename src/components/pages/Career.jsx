import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommonStyle from '../../assets/style/CommonStyle';

const CareerBox = styled.dl`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  dt {
    flex: 0 1 100%;
    font-weight: 800;
  }

  dd {
    flex: 0 1 100%;
    margin: 1rem 0 3rem 1.5rem;
    font-weight: 300;
    line-height: 1.7;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      display: block;
      font-size: 1.4rem;
      color: #888;
    }
  }
`;

export default function Career() {
  return (
    <CommonStyle.Section>
      <CommonStyle.H3 showType="block">work experience</CommonStyle.H3>
      <CareerBox>
        <dt>야나두</dt>
        <dd>
          <span>2019년 6월 &ndash; 현재 (2년 8개월)</span>
          메인 상품 및 이벤트 페이지 등 사이트 내 여러 페이지를 운영 및
          개발하였습니다. <br />
          또한 부트스트랩을 이용하여 백오피스 사이트를 리뉴얼하였으며, <br />
          리액트를 이용하여 야나두 메인 사이트를 리뉴얼 작업 후 성공적으로
          오픈하여 현재 서비스 중입니다.
        </dd>
        <dt>순수교육</dt>
        <dd>
          <span>2018년 1월 &ndash; 2019년 6월 (1년 6개월)</span>
          메인 화면, 기프트샵, 상품 구매, 이벤트 및 공지사항 게시판 페이지 등
          <br />
          전체적인 사이트 리뉴얼 작업을 진행하였고, 기존 사이트 운영 및 개발을
          진행하였습니다.
        </dd>
      </CareerBox>
    </CommonStyle.Section>
  );
}
