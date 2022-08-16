import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';

import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import YanadooImageData from '../../../data/YanadooImageData';

const ContentBox = styled.div`
  ol {
    > li {
      padding: 4rem 0;
      background-color: #fff;
      border-radius: 2rem;
      box-sizing: border-box;

      + li {
        margin-top: 3rem;
      }

      .swiper-container {
        padding-bottom: 3rem;
      }

      .swiper-pagination-fraction,
      .swiper-pagination-custom,
      .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 0;
      }

      .swiper-pagination-bullet-active {
        padding: 0 1rem;
        background-color: #fd9956;
        border-radius: 2rem;
      }
    }
  }
`;

const ContentInnerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2.5rem;

  .slide-box {
    flex: 0 1 auto;
    width: 46%;
    margin-right: 1rem;
  }

  .info-box {
    flex: 0 1 auto;
    width: 50%;
    margin-top: 1rem;

    div {
      p {
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 1.4;
        word-break: keep-all;
      }

      + div {
        margin-top: 2rem;
      }

      strong {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 1.8rem;
      }

      .no-use {
        text-decoration: line-through;
      }
    }

    a {
      color: #000;
      border-bottom: 1px solid #000;
    }

    .project {
      font-weight: 500;
      text-indent: -1.5rem;

      &::before {
        content: '';
        display: inline-block;
        width: 0.9rem;
        height: 0.5rem;
        margin: 0.45rem 0.5rem 0 0;
        border: 0.2rem solid #000;
        border-top: 0;
        border-right: 0;
        vertical-align: top;
        transform: rotate(-45deg);
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    .slide-box {
      flex: 0 1 auto;
      width: 100%;
      margin: 0;
    }

    .info-box {
      flex: 0 1 auto;
      width: 100%;
      padding: 0 2rem;

      div {
        p {
          font-size: 1.4rem;
        }

        strong {
          font-size: 1.6rem;
        }
      }

      a {
        font-size: 1.4rem;
      }

      .project {
        font-size: 1.5rem;
      }
    }
  }
`;

const ContentTitle = styled.p`
  display: inline-block;
  position: relative;
  font-weight: 800;
  font-size: 2.3rem;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1rem;
    background-color: #fd9956;
    z-index: -1;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 2rem;
  }
`;

const ProjectContent = styled.ul`
  li {
    font-weight: 300;
    line-height: 1.5;
    word-break: keep-all;

    &::before {
      content: '-';
      display: inline-block;
      margin-right: 0.5rem;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.4rem;
  }
`;

const SwiperSlideBox = styled.picture`
  display: block;
  width: 100%;

  div {
    position: relative;
    padding-bottom: 70%;
    overflow: hidden;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

export default function Yanadoo() {
  const [swiper, setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  SwiperCore.use([Pagination, Autoplay, Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperParams = {
    // navigation: {
    //   prevEl: navigationPrevRef.current,
    //   nextEl: navigationNextRef.current,
    // },
    spaceBetween: 0,
    pagination: { clickable: true },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.activeIndex = mainImageIndex;
      swiper.navigation.update();
    },
    onSwiper: setSwiper,
    onSlideChange: (e) => setMainImageIndex(e.activeIndex),
  };

  return (
    <ContentBox>
      <ol>
        <li>
          <ContentTitle>야나두 3.0 리뉴얼</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <Swiper {...swiperParams} ref={setSwiper}>
                {YanadooImageData &&
                  YanadooImageData.Yanadoo3.map((list) => {
                    return (
                      <SwiperSlide key={list.id}>
                        <SwiperSlideBox>
                          <div>
                            <span
                              style={{
                                backgroundImage: `url(${list.url})`,
                                backgroundSize: 'auto 100%',
                              }}
                            ></span>
                          </div>
                        </SwiperSlideBox>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className="info-box">
              <div>
                <p className="project">
                  React 라이브러리로 야나두 메인 사이트를 리뉴얼하였습니다.
                  <br />
                  회원가입, 소셜 API 연동 등 전체적인 회원 API 연동을 맡아
                  개발하였습니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>회원가입 (일반 / 비회원 수기 결제 / 해외 거주자)</li>
                  <li>
                    소셜 회원가입 및 로그인 연동(카카오 / 네이버 / 페이스북 /
                    애플)
                  </li>
                  <li>아이디 , 비밀번호 찾기</li>
                  <li>휴면 계정 해지</li>
                  <li>회원 정보 수정</li>
                  <li>공통 페이지네이션 기능</li>
                  <li>공통 더보기 버튼 기능</li>
                  <li>공통 문자, 이메일 본인 인증 기능</li>
                  <li>NICE 본인 인증 연동</li>
                  <li>이미지 업로드 기능</li>
                  <li>마이클래스, 이벤트 등의 목록, 상세 화면</li>
                </ProjectContent>
              </div>
              <div>
                <p>
                  <strong>참조 링크</strong>
                  <a href="https://www.yanadoo.co.kr" target="_blank">
                    https://www.yanadoo.co.kr
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>사용 기술</strong>React, Scss, HTML, CSS3, JavaScript
                </p>
              </div>
              <div>
                <p>
                  <strong>개발 환경</strong>Git, Jira, Confluence
                </p>
              </div>
            </div>
          </ContentInnerBox>
        </li>
        <li>
          <ContentTitle>꿀튜브</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <Swiper {...swiperParams} ref={setSwiper}>
                {YanadooImageData &&
                  YanadooImageData.Kkultube.map((list) => {
                    return (
                      <SwiperSlide key={list.id}>
                        <SwiperSlideBox>
                          <div>
                            <span
                              style={{
                                backgroundImage: `url(${list.url})`,
                                backgroundSize: 'auto 100%',
                              }}
                            ></span>
                          </div>
                        </SwiperSlideBox>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className="info-box">
              <div>
                <p className="project">
                  유튜브 전용 플랫폼 서비스로 <br />
                  공통 스타일부터 전체적인 레이아웃까지 모바일 페이지를 작업
                  진행하였습니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>메인 페이지</li>
                  <li>이벤트, 공고사항등 게시판 페이지</li>
                  <li>광고 리스트 페이지</li>
                </ProjectContent>
              </div>
              <div>
                <p>
                  <strong>참조 링크</strong>
                  <a href="https://www.kkultube.co.kr/" target="_blank">
                    https://www.kkultube.co.kr/
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>사용 기술</strong>HTML, CSS3, JavaScript, JQuery
                </p>
              </div>
              <div>
                <p>
                  <strong>개발 환경</strong>Git, Jira, Confluence
                </p>
              </div>
            </div>
          </ContentInnerBox>
        </li>
        <li>
          <ContentTitle>야나두 어드민 리뉴얼</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <Swiper {...swiperParams} ref={setSwiper}>
                {YanadooImageData &&
                  YanadooImageData.YanadooAdmin.map((list) => {
                    return (
                      <SwiperSlide key={list.id}>
                        <SwiperSlideBox>
                          <div>
                            <span
                              style={{
                                backgroundImage: `url(${list.url})`,
                                backgroundPosition: '0 50%',
                              }}
                            ></span>
                          </div>
                        </SwiperSlideBox>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className="info-box">
              <div>
                <p className="project">
                  그리드, 폼, 버튼 등 공통 템플릿을 만들어 백엔드 개발자가 해당
                  템플릿을 이용하여 개발할 수 있도록 제공하였으며 로그인
                  페이지의 UI 및 애니메이션을 구현하였습니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>공통 템플릿(Grid, Form, Button ...)</li>
                  <li>메인 페이지 레이아웃</li>
                  <li>로그인 페이지</li>
                </ProjectContent>
              </div>
              <div>
                <p>
                  <strong>사용 기술</strong>Bootstrap, JavaScript, JQuery
                </p>
              </div>
              <div>
                <p>
                  <strong>개발 환경</strong>Git, Jira, Confluence
                </p>
              </div>
            </div>
          </ContentInnerBox>
        </li>
        <li>
          <ContentTitle>야나두 1.0</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <Swiper {...swiperParams} ref={setSwiper}>
                {YanadooImageData &&
                  YanadooImageData.Yanadoo1.map((list) => {
                    return (
                      <SwiperSlide key={list.id}>
                        <SwiperSlideBox>
                          <div>
                            <span
                              style={{
                                backgroundImage: `url(${list.url})`,
                              }}
                            ></span>
                          </div>
                        </SwiperSlideBox>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className="info-box">
              <div>
                <p className="project">
                  메인 상품 및 이벤트 페이지 등 사이트 내 여러 페이지를 운영 및
                  개발하였습니다. <br />
                  이벤트 페이지 내 애니메이션 구현 및 라이브러리 사용, 상담
                  게시판 등 UI 개발하였습니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>평생수강 페이지</li>
                  <li>
                    야핏 페이지
                    <a
                      href="https://www.yanadoo.co.kr/promotion-landing/yafitPremium.html"
                      target="_blank"
                    >
                      (링크)
                    </a>
                  </li>
                  <li>각종 프로모션 랜딩 페이지</li>
                  <li>게시판 페이지</li>
                  <li>B2B 페이지</li>
                  <li>유지보수</li>
                </ProjectContent>
              </div>
              <div>
                <p>
                  <strong>참조 링크</strong>
                  <span className="no-use">https://www.yanadoo.co.kr</span>{' '}
                  (리뉴얼로 인한 도메인 변경)
                </p>
              </div>
              <div>
                <p>
                  <strong>사용 기술</strong>HTML, CSS3, JavaScript, JQuery
                </p>
              </div>
              <div>
                <p>
                  <strong>개발 환경</strong>Git, Jira, Confluence
                </p>
              </div>
            </div>
          </ContentInnerBox>
        </li>
      </ol>
    </ContentBox>
  );
}
