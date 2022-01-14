import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommonStyle from '../../assets/style/CommonStyle';

import HtmlIco from '../../assets/images/ico_html.png';
import CssIco from '../../assets/images/ico_css.png';
import JavascriptIco from '../../assets/images/ico_javascript.png';
import JqueryIco from '../../assets/images/ico_jquery.png';
import ReactIco from '../../assets/images/ico_react.png';
import PhotoshopIco from '../../assets/images/ico_photoshop.png';

const SkillBox = styled.div`
  padding: 4rem 0;

  p {
    margin-bottom: 3rem;
    font-size: 2rem;
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

  li {
    span {
      display: block;
      width: 10rem;
      height: 15rem;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 100%;
    }
    &.html {
      span {
        background-image: url(${HtmlIco});
      }
    }

    &.css {
      span {
        background-image: url(${CssIco});
      }
    }

    &.javascript {
      span {
        background-image: url(${JavascriptIco});
      }
    }

    &.jquery {
      span {
        background-image: url(${JqueryIco});
      }
    }

    &.react {
      span {
        background-image: url(${ReactIco});
      }
    }

    &.photoshop {
      span {
        background-image: url(${PhotoshopIco});
      }
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
      <CommonStyle.H3>스킬</CommonStyle.H3>
      <SkillBox>
        <p>
          웹 표준에 맞는 코드 구현이 가능하고, 크로스 브라우징 이슈를 해결하기
          위해 항상 노력합니다.
          <br />
          자바스크립트, 제이쿼리는 간단한 기능 구현 가능 및 리액트 프레임워크로
          서비스 오픈 후 지속적인 스터디를 통해 스킬업 중입니다.
        </p>
        <ul>
          <li className="html">
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
          </li>
        </ul>
      </SkillBox>
    </CommonStyle.Section>
  );
}
