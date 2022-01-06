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

export default function Yanadoo() {
  return (
    <ContentBox>
      <ol>
        <li>
          <p>3.0 프로젝트</p>
          <div>
            리액트로 작업 / 마이클래스 / 이벤트 / 회원(회원가입, 소셜 회원가입
            및 로그인, 아이디,비밀번호 찾기, 휴면회원 등)
          </div>
        </li>
        <li>
          <p>2.0 어드민 프로젝트</p>
          <div>부트스트랩 작업 / 어드민 템플릿 작업</div>
        </li>
        <li>
          <p>1.0 유지보수 관리 + 1.0 랜딩</p>
          <div>기존 페이지 유지보수 / 프로모션 랜딩 작업</div>
        </li>
      </ol>
    </ContentBox>
  );
}
