import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';

import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import ImageData from '../../../data/ImageData';

export default function Wemakeprice() {
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
          <ContentTitle>위메프 - PC 신규환경</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <Swiper {...swiperParams} ref={setSwiper}>
                {ImageData &&
                  ImageData.Wemakeprice01.map((list) => {
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
                  기존 레거시 시스템을 React, Next.js 기반으로 PC 개편 작업을 진행하고 있습니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>
                    자주 묻는 질문
                    <a
                      href="https://front.wd.wemakeprice.com/cs/faq"
                      rel="noreferrer"
                      target="_blank"
                    >
                      (링크)
                    </a>
                  </li>
                  <li>
                    제안하기
                    <a
                      href="https://front.wd.wemakeprice.com/cs/proposal"
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
                  <strong>사용 기술</strong> Next.js, React, Recoil, HTML, JavaScript
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
          <ContentTitle>위메프</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <Swiper {...swiperParams} ref={setSwiper}>
                {ImageData &&
                  ImageData.Wemakeprice02.map((list) => {
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
                  위메프 메인 사이트의 운영 개발 및 유지보수를 진행하고 있습니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>
                    MW 찜리스트 - 상품/딜, 가격비교
                    <a
                      href="https://mw.wemakeprice.com/mypage/wishlist"
                      rel="noreferrer"
                      target="_blank"
                    >
                      (링크)
                    </a>
                  </li>
                  <li>MW 타임특가</li>
                </ProjectContent>
              </div>
              <div>
                <p>
                  <strong>참조 링크</strong>
                  <a href="https://front.wemakeprice.com/main" rel="noreferrer" target="_blank">
                    https://front.wemakeprice.com/main
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>사용 기술</strong>HTML, JavaScript, JQuery, Handlebars
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