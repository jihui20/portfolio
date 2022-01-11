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

export default function Soonsoo() {
  return (
    <ContentBox>
      <ol>
        <li>
          <ContentTitle>렛츠고 리딩</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <p>슬릭 박스</p>
            </div>
            <div className="info-box">
              <p>
                <strong>주요 작업</strong>
                <span>
                  유지보수 / 프로모션 랜딩 / 리뉴얼(게시판, 기프트샵, 주문 및
                  회원가입 페이지)
                </span>
              </p>
              <p>
                <strong>도메인</strong> http://www.letsgoreading.com/
              </p>
              <p>
                <strong>Front-end</strong> HTML, CSS3, JQuery
              </p>
            </div>
          </ContentInnerBox>
        </li>
      </ol>
    </ContentBox>
  );
}
