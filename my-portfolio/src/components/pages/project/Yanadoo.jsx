import React from 'react';

import styled from 'styled-components';

const ContentBox = styled.div`
  ol {
    /* padding-left: 2rem; */

    li {
      /* list-style-type: decimal; */

      padding: 4rem 2rem;
      border: 1px solid #000;
      box-sizing: border-box;
    }
  }
`;

const ContentInnerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;

  .slide-box {
    flex: 0 1 auto;
    width: 50%;
  }

  .info-box {
    flex: 0 1 auto;
    width: 50%;

    p {
      line-height: 1.4;
      word-break: keep-all;

      + p {
        margin-top: 2rem;
      }

      strong {
        display: block;
        font-size: 1.8rem;
      }
    }
  }
`;

const ContentTitle = styled.p`
  font-weight: 800;
  font-size: 3rem;
  text-align: center;
`;

export default function Yanadoo() {
  return (
    <ContentBox>
      <ol>
        <li>
          <ContentTitle>야나두 3.0 프로젝트</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <p>슬릭 박스</p>
            </div>
            <div className="info-box">
              <p>
                <strong>주요 작업</strong>마이클래스 / 이벤트 / 회원(회원가입,
                소셜 회원가입 및 로그인, 아이디/비밀번호 찾기, 회원 정보 수정,
                휴면회원 해제 등)
              </p>
              <p>
                <strong>도메인</strong>https://www.yanadoo.co.kr
              </p>
              <p>
                <strong>Front-end</strong>React, Sass, HTML, CSS3
              </p>
            </div>
          </ContentInnerBox>
        </li>
        <li>
          <ContentTitle>야나두 2.0 어드민 프로젝트</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <p>슬릭 박스</p>
            </div>
            <div className="info-box">
              <p>
                <strong>주요 작업</strong>템플릿 작업(그리드, form, 주요 페이지
                등)
              </p>
              {/* <p>도메인: https://www.yanadoo.co.kr</p> */}
              <p>
                <strong>Front-end</strong>Bootstrap, JQuery
              </p>
            </div>
          </ContentInnerBox>
        </li>
        <li>
          <ContentTitle>야나두 1.0 프로젝트</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <p>슬릭 박스</p>
            </div>
            <div className="info-box">
              <p>
                <strong>주요 작업</strong>템플릿 작업(그리드, form, 주요 페이지
                등)
              </p>
              <p>
                <strong>도메인</strong>https://www.yanadoo.co.kr (현재 중지된
                도메인)
              </p>
              <p>
                <strong>Front-end</strong>HTML, CSS3, JQuery
              </p>
            </div>
          </ContentInnerBox>
        </li>
      </ol>
    </ContentBox>
  );
}
