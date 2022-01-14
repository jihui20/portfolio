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
        margin-bottom: .5rem;
        font-size: 1.8rem;
      }

      a{
      color: #000;
      border-bottom: .2rem solid #000;
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
              <p>
                <strong>주요 작업</strong>
                <span>
                  유지보수 / 프로모션 랜딩 / 리뉴얼(게시판, 기프트샵, 주문 및
                  회원가입 페이지)
                </span>
              </p>
              <p>
                <strong>도메인</strong><a href="http://www.letsgoreading.com/" target="_blank">http://www.letsgoreading.com/</a>
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
