import { useState, useRef } from 'react';

import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
//style
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

const ContentBox = styled.div`
  ol {
    margin-top: 3rem;

    > li {
      /* list-style-type: decimal; */

      padding: 4rem 2rem;
      background-color: #fff;
      border-radius: 2rem;
      box-shadow: 0.1rem 0.5rem 0.5rem rgb(0, 0, 0, 0.2);
      box-sizing: border-box;

      + li {
        margin-top: 3rem;
      }
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

    div {
      p {
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
      border-bottom: 0.2rem solid #000;
    }
  }
`;

const ContentTitle = styled.p`
  font-weight: 800;
  font-size: 3rem;
  text-align: center;
`;

const ProjectContent = styled.ul`
  li {
    line-height: 1.5;

    &::before {
      content: '-';
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
`;

export default function Soonsoo() {
  const [swiper, setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  SwiperCore.use([Pagination, Autoplay, Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperParams = {
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
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
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <button
                  type="button"
                  className="btn-slide prev"
                  ref={navigationPrevRef}
                >
                  <em className="blind">PREV</em>
                </button>
                <button
                  type="button"
                  className="btn-slide next"
                  ref={navigationNextRef}
                >
                  <em className="blind">NEXT</em>
                </button>
              </Swiper>
            </div>
            <div className="info-box">
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
                  <strong>도메인</strong>
                  <a href="http://www.letsgoreading.com/" target="_blank">
                    http://www.letsgoreading.com/
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>Front-end</strong> HTML, CSS3, JQuery
                </p>
              </div>
            </div>
          </ContentInnerBox>
        </li>
      </ol>
    </ContentBox>
  );
}
