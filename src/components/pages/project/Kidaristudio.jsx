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
                  태국, 대만 AOS PLUS APP 웹뷰 페이지 작업 진행중입니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>충전소</li>
                  <li>내 서재</li>
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
                  기존에 운영되고 있던 벨툰 JP 일본 플랫폼을 Next.js 기반으로
                  리뉴얼 오픈하였습니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>
                    선물함 / 쿠폰함 / 0엔티켓
                    <a
                      href="https://www.beltoon.jp/app/benefit/gift"
                      rel="noreferrer"
                      target="_blank"
                    >
                      (링크)
                    </a>
                  </li>
                  <li>
                    마이 페이지(설정 / 내 서재 / 프로필 수정)
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
                  새로운 글로벌 플랫폼인 벨툰 아랍을 메인으로 담당하여 개발 및
                  오픈 진행하였습니다.
                  <br />
                  오른쪽에서 왼쪽으로 읽는 언어를 사용하는 아랍의 특성에 맞게
                  언어와 UI를 기존과 다른게 역방향으로 개발하였습니다.
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
                    마이 페이지
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
                  키다리스튜디오의 메인 플랫폼을 운영 및 유지보수 진행하고
                  있습니다.
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
