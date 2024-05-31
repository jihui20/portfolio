import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';

import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import ImageData from '../../../data/ImageData';

export default function Kidaristudio() {
  const [, setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  SwiperCore.use([Pagination, Autoplay, Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperParams = {
    // navigation: {
    //   prevEl: navigationPrevRef.current,
    //   nextEl: navigationNextRef.current,
    // },
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
          <ContentTitle>태국, 대만 플러스 앱</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <Swiper {...swiperParams} ref={setSwiper}>
                {ImageData?.Kidaristudio.map((list) => {
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
                  태국, 대만 글로벌 플랫폼 신규 APP 서비스를 개발 중입니다.
                  <br />
                  APP의 웹뷰 파트 개발 담당으로 웹뷰 개발 업무와 앱 브릿지
                  호출을 위한 코드 추가 및 개선 작업 진행합니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>코인 충전소 내 결제 수단, 쿠폰 영역</li>
                  <li>
                    내 서재(구매 작품, 최근 본 작품, 좋아효 한 작품 리스트)
                  </li>
                  <li>알림 설정</li>
                </ProjectContent>
              </div>
              <div>
                <p>
                  <strong>사용 기술</strong>React, HTML, JavaScript,
                  styled-components
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
          <ContentTitle>벨툰 JP - 일본</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <Swiper {...swiperParams} ref={setSwiper}>
                {ImageData?.Kidaristudio01.map((list) => {
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
                  해당 프로젝트는 일본 서비스 플랫폼인 벨툰JP를 새롭게
                  리뉴얼하는 프로젝트입니다.
                  <br />
                  기존 React로 되어있던 플랫폼을 Next.js 기반으로 리뉴얼을
                  진행했고,
                  <br />
                  해당 프로젝트에서 마이페이지 및 마이페이지와 연관되어 있는
                  페이지들을 전체적으로 담당하여 개발하였습니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>
                    선물함 / 쿠폰함 / 0엔티켓함-무료로 볼 수 있는 작품 목록과
                    무료 열람까지 남은 시간 노출
                    <a
                      href="https://www.beltoon.jp/app/benefit/gift"
                      rel="noreferrer"
                      target="_blank"
                    >
                      (링크)
                    </a>
                  </li>
                  <li>
                    마이 페이지 (설정, 프로필 수정, 내 서재 등)
                    <a
                      href="https://www.beltoon.jp/app/mypage"
                      rel="noreferrer"
                      target="_blank"
                    >
                      (링크)
                    </a>
                  </li>
                  <li>
                    로그인 / 회원가입 UI 개선
                    <a
                      href="https://www.beltoon.jp/user/login"
                      rel="noreferrer"
                      target="_blank"
                    >
                      (링크)
                    </a>
                  </li>
                </ProjectContent>
              </div>
              <div>
                <p>
                  <strong>사용 기술</strong>Next.js, React, HTML, JavaScript,
                  styled-components
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
          <ContentTitle>벨툰 AR - 아랍</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <Swiper {...swiperParams} ref={setSwiper}>
                {ImageData?.Kidaristudio02.map((list) => {
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
                  아랍을 타겟으로 한 신규 플랫폼인 벨툰 AR을 메인으로 담당하여
                  개발 및 서비스 오픈하였습니다.
                  <br />
                  오른쪽에서 왼쪽으로 읽는 언어를 사용하는 아랍의 특성에 맞게
                  언어와 UI를 기존과 다른게 역방향으로 개발하였습니다.(HTML
                  태그의 dir 속성 사용)
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>
                    메인
                    <a
                      href="https://www.beltoon.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      (링크)
                    </a>
                  </li>
                  <li>
                    마이페이지(선물함, 쿠폰함, 내 서재, 댓글 등)
                    <a
                      href="https://www.beltoon.com/my"
                      rel="noreferrer"
                      target="_blank"
                    >
                      (링크)
                    </a>
                  </li>
                  <li>[BL 작품 보기] 토글 값에 의한 데이터 필터 작업</li>
                </ProjectContent>
              </div>
              <div>
                <p>
                  <strong>사용 기술</strong>React, HTML, JavaScript,
                  styled-components
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
          <ContentTitle>봄툰 KR - 한국</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <Swiper {...swiperParams} ref={setSwiper}>
                {ImageData?.Kidaristudio03.map((list) => {
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
                  메인 플랫폼인 봄툰을 기존 React 환경에서 Next.js 환경으로
                  리뉴얼 진행하였습니다.
                  <br />
                  전체적인 페이지의 이슈들을 처리, 개선 작업을 담당하였습니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>참조 링크</strong>
                  <a
                    href="https://www.bomtoon.com/bom/comic/main"
                    rel="noreferrer"
                    target="_blank"
                  >
                    https://www.bomtoon.com/bom/comic/main
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>사용 기술</strong>Next.js, React, HTML, JavaScript,
                  styled-components
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
    width: 48%;
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
  width: 90%;

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
