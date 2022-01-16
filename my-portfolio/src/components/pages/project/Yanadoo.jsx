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

    > li {
      /* list-style-type: decimal; */

      padding: 4rem 2rem;
      border: 1px solid #000;
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

export default function Yanadoo() {
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
          <ContentTitle>야나두 3.0 프로젝트</ContentTitle>
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
                  <li>회원가입 (일반 / 비회원 수기 결제 / 해외 거주자)</li>
                  <li>
                    소셜 로그인 및 회원가입(카카오 / 네이버 / 페이스북 / 애플)
                  </li>
                  <li>아이디 , 비밀번호 찾기</li>
                  <li>휴면 계정 해지</li>
                  <li>회원 정보 수정</li>
                  <li>페이지네이션 공통 기능</li>
                  <li>더보기 버튼 공통 기능</li>
                  <li>인증 번호 공통 기능</li>
                  <li>AWS 이미지 업로드</li>
                  <li>마이클래스 리스트 및 디테일 페이지</li>
                  <li>이벤트 리스트 및 디테일 페이지</li>
                </ProjectContent>
              </div>
              <div>
                <p>
                  <strong>도메인</strong>
                  <a href="https://www.yanadoo.co.kr" target="_blank">
                    https://www.yanadoo.co.kr
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>Front-end</strong>HTML, CSS3, React, Sass
                </p>
              </div>
              <p>{/* <strong>Version Control</strong> Git */}</p>
            </div>
          </ContentInnerBox>
        </li>
        <li>
          <ContentTitle>야나두 2.0 어드민 프로젝트</ContentTitle>
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
