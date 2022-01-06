import React from 'react';

import styled from 'styled-components';

const ContentBox = styled.div`
  ol {
    padding-left: 2rem;

    li {
      list-style-type: decimal;
    }
  }
`;

export default function Soonsoo() {
  return (
    <ContentBox>
      <ol>
        <li>
          <p>유지보수 / 프로모션 랜딩 / 리뉴얼</p>
          <div>
            기존 페이지 유지보수하고, 매월 프로모션 랜딩 작업, 리뉴얼 작업
            하면서 게시판, 기프트샵, 주문 및 회원가입 페이지작업
          </div>
        </li>
      </ol>
    </ContentBox>
  );
}
