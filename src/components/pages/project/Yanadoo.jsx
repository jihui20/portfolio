import { useState, useRef } from 'react';

import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
//style
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import Yanadoo3 from '../../../assets/images/img_yanadoo3.png';
import Yanadoo2Admin from '../../../assets/images/img_yanadoo2_admin.png';
import Yanadoo101 from '../../../assets/images/img_yanadoo1_01.png';
import Yanadoo102 from '../../../assets/images/img_yanadoo1_02.png';
import Yanadoo103 from '../../../assets/images/img_yanadoo1_03.png';
import Yanadoo104 from '../../../assets/images/img_yanadoo1_04.png';

let yanadoo1 = [
  { id: 1, url: Yanadoo101 },
  { id: 2, url: Yanadoo102 },
  { id: 3, url: Yanadoo103 },
  { id: 4, url: Yanadoo104 },
];

const ContentBox = styled.div`
  ol {
    margin-top: 3rem;

    > li {
      /* list-style-type: decimal; */

      padding: 4rem 2rem;
      background-color: #fff;
      border-radius: 2rem;
      box-shadow: 0.1rem 0.5rem 1rem rgb(0, 0, 0, 0.2);
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
        background-color: #1f2426;
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

const SwiperSlideBox = styled.picture`
  display: block;
  width: 86%;
  /* margin-left: 2rem; */
  margin: 0 auto;

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
                <SwiperSlide>
                  <SwiperSlideBox>
                    <div>
                      <span
                        style={{ backgroundImage: `url(${Yanadoo3})` }}
                      ></span>
                    </div>
                  </SwiperSlideBox>
                </SwiperSlide>
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
                  <strong>사용 기술</strong>Git, React, Scss, HTML, CSS3,
                  JavaScript
                </p>
              </div>
              <div>
                <p>
                  <strong>개발 환경</strong>Jira, Confluence
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
                <SwiperSlide>
                  <SwiperSlideBox>
                    <div>
                      <span
                        style={{
                          backgroundImage: `url(${Yanadoo2Admin})`,
                          backgroundPosition: '0 50%',
                        }}
                      ></span>
                    </div>
                  </SwiperSlideBox>
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperSlideBox>
                    <div>
                      <span
                        style={{
                          backgroundImage: `url(${Yanadoo2Admin})`,
                          backgroundPosition: '0 50%',
                        }}
                      ></span>
                    </div>
                  </SwiperSlideBox>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="info-box">
              <div>
                <p>
                  <strong>주요 작업</strong>
                </p>
                <ProjectContent>
                  <li>공통 템플릿(Grid, Form, Button, library ...)</li>
                  <li>메인 페이지 레이아웃</li>
                  <li>로그인 페이지</li>
                </ProjectContent>
              </div>
              <div>
                <p>
                  <strong>사용 기술</strong>Git, Bootstrap, JQuery, JavaScript
                </p>
              </div>
              <div>
                <p>
                  <strong>개발 환경</strong>Jira, Confluence
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
                {yanadoo1 &&
                  yanadoo1.map((list) => {
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
                  <strong>참조 링크</strong>https://www.yanadoo.co.kr (참조 링크
                  변경)
                </p>
              </div>
              <div>
                <p>
                  <strong>사용 기술</strong>Git, HTML, CSS3, JQuery, JavaScript
                </p>
              </div>
              <div>
                <p>
                  <strong>개발 환경</strong>Jira, Confluence
                </p>
              </div>
            </div>
          </ContentInnerBox>
        </li>
      </ol>
    </ContentBox>
  );
}
