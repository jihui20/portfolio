import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';

import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import Soonsoo01 from '../../../assets/images/img_soonsoo_01.png';
import Soonsoo02 from '../../../assets/images/img_soonsoo_02.png';
import Soonsoo03 from '../../../assets/images/img_soonsoo_03.png';

let soonsoo = [
  { id: 1, url: Soonsoo01 },
  { id: 2, url: Soonsoo02 },
  { id: 3, url: Soonsoo03 },
];

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
        background-color: #ff7800;
        border-radius: 2rem;
        opacity: 0.6;
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
        strong {
          font-size: 1.6rem;
        }
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
    background-color: #ff7800;
    opacity: 0.6;
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

export default function Soonsoo() {
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
          <ContentTitle>렛츠고 리딩</ContentTitle>
          <ContentInnerBox>
            <div className="slide-box">
              <Swiper {...swiperParams} ref={setSwiper}>
                {soonsoo &&
                  soonsoo.map((list) => {
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
                  메인 화면, 기프트샵, 상품 구매, 이벤트 및 공지사항 게시판
                  페이지 등 전체적인 사이트 리뉴얼 작업을 진행하였고, 기존
                  사이트 운영 및 개발을 진행하였습니다.
                </p>
              </div>
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>
                    사이트 리뉴얼
                    <ul>
                      <li>회원가입</li>
                      <li>기프트샵</li>
                      <li>주문</li>
                      <li>게시판</li>
                    </ul>
                  </li>
                  <li>각종 프로모션 랜딩 페이지</li>
                  <li>유지보수</li>
                </ProjectContent>
              </div>
              <div>
                <p>
                  <strong>참조 링크</strong>
                  <a href="http://www.letsgoreading.com/" target="_blank">
                    http://www.letsgoreading.com/
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>Front-end</strong> HTML, CSS3, JQuery, JavaScript
                </p>
              </div>
            </div>
          </ContentInnerBox>
        </li>
      </ol>
    </ContentBox>
  );
}
