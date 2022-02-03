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
      <CommonStyle.H3 showType="block">경력</CommonStyle.H3>
      <CareerBox>
        <dt>야나두</dt>
        <dd>
          <span>2019년 6월 &ndash; 현재</span>
          평생수강이라는 메인 상품 페이지를 유지보수 및 오픈하였고, <br />
          부트스트랩을 이용한 어드민 리뉴얼 작업, <br />
          리액트로 3.0 리뉴얼 오픈 후 디벨롭 진행중입니다.
        </dd>
        <dt>렛츠고 리딩</dt>
        <dd>
          <span>2018년 1월 &ndash; 2019년 6월</span>
          기존 사이트 유지보수를 진행하고, <br />
          메인, 기프트샵, 상품 구매, 이벤트 및 공지사항 게시판 페이지 등
          전체적인 리뉴얼 작업을 진행하였습니다.
        </dd>
      </CareerBox>
    </CommonStyle.Section>
  );
}
