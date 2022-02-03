import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommonStyle from '../../assets/style/CommonStyle';
import SkillData from '../../data/SkillData.json';

import HtmlIco from '../../assets/images/ico_html.png';
import CssIco from '../../assets/images/ico_css.png';
import JavascriptIco from '../../assets/images/ico_javascript.png';
import JqueryIco from '../../assets/images/ico_jquery.png';
import ReactIco from '../../assets/images/ico_react.png';
import PhotoshopIco from '../../assets/images/ico_photoshop.png';

const SkillBox = styled.div`
  padding-bottom: 4rem;

  p {
    margin-bottom: 3rem;
    font-size: 1.6rem;
    line-height: 1.5;
    word-break: keep-all;
  }

  dl {
    + dl {
      margin-top: 1.5rem;
    }

    dt {
      font-weight: 800;
      font-size: 1.8rem;
    }

    dd {
      margin-top: 0.5rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      flex: 0 1 31%;
      margin: 1rem 1rem 1rem 0;
      text-align: center;
      box-sizing: border-box;

      &:nth-of-type(3n) {
        margin-right: 0;
      }

      div {
        display: block;
        width: 10rem;
        height: 15rem;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 100%;
      }

      &.html {
        div {
          background-image: url(${HtmlIco});
        }
      }

      &.css3 {
        div {
          background-image: url(${CssIco});
        }
      }

      &.javascript {
        div {
          background-image: url(${JavascriptIco});
        }
      }

      &.jquery {
        div {
          background-image: url(${JqueryIco});
        }
      }

      &.react {
        div {
          background-image: url(${ReactIco});
        }
      }

      &.photoshop {
        div {
          background-image: url(${PhotoshopIco});
        }
      }
    }
  }
`;

const ProgressSpan = styled.span`
  position: relative;
  display: block;
  width: 80%;
  height: 2.5rem;
  margin: 2rem auto 0;
  background-color: #d2d8d9;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #828c6d;
    transition: all 0.3s;
  }

  &.active {
    &::after {
      width: ${(props) => props.width || 0}%;
      transition: all 0.7s 0.5s;
    }
  }
`;

export default function Skill() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <CommonStyle.Section>
      <CommonStyle.H3 showType="block">스킬</CommonStyle.H3>
      <SkillBox>
        <p>
          웹 표준에 맞는 코드 구현이 가능하고, 크로스 브라우징 이슈를 해결하기
          위해 항상 노력합니다.
          <br />
          자바스크립트, 제이쿼리는 간단한 기능 구현 가능 및 리액트 프레임워크로
          서비스 오픈 후 지속적인 스터디를 통해 스킬업 중입니다.
        </p>
        <ul>
          {SkillData &&
            SkillData.map((list) => {
              return (
                <li key={list.sortNum} className={list.skill.toLowerCase()}>
                  <div>
                    <CommonStyle.Blind>
                      {list.skill.toLowerCase()}
                    </CommonStyle.Blind>
                  </div>
                  <ProgressSpan
                    width={list.percent}
                    className={!isLoading && 'active'}
                  ></ProgressSpan>
                </li>
              );
            })}

          {/* <li className="html">
            <span>
              <CommonStyle.Blind>html</CommonStyle.Blind>
            </span>
          </li>
          <li className="css">
            <span>
              <CommonStyle.Blind>css</CommonStyle.Blind>
            </span>
          </li>
          <li className="javascript">
            <span>
              <CommonStyle.Blind>javascript</CommonStyle.Blind>
            </span>
          </li>
          <li className="jquery">
            <span>
              <CommonStyle.Blind>jquery</CommonStyle.Blind>
            </span>
          </li>
          <li className="react">
            <span>
              <CommonStyle.Blind>react</CommonStyle.Blind>
            </span>
          </li>
          <li className="photoshop">
            <span>
              <CommonStyle.Blind>photoshop</CommonStyle.Blind>
            </span>
          </li> */}
        </ul>
      </SkillBox>
    </CommonStyle.Section>
  );
}
