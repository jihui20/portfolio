import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommonStyle from '../../assets/style/CommonStyle';

const ProgressSpan = styled.span`
  position: relative;
  display: block;
  width: 80%;
  height: 0.5rem;
  background-color: #ccc;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: red;
    transition: all 0.3s;
  }

  &.active {
    &::after {
      width: ${(props) => props.width || 0}%;
      transition: all 1s 0.7s;
    }
  }
`;

export default function Skill() {
  const [isLoading, setIsLoading] = useState(true);
  const [skillPercent, setSkillPercent] = useState({
    html: 95,
    css: 85,
    javascript: 70,
    react: 50,
    photoshop: 60,
  });

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <CommonStyle.Section>
      <CommonStyle.H3>스킬</CommonStyle.H3>
      <dl>
        <dt>HTML</dt>
        <dd>
          <p>{skillPercent.html}%</p>
          <ProgressSpan
            width={skillPercent.html}
            className={!isLoading && 'active'}
          ></ProgressSpan>
        </dd>
      </dl>
      <dl>
        <dt>CSS3</dt>
        <dd>
          <p>{skillPercent.css}%</p>
          <ProgressSpan
            width={skillPercent.css}
            className={!isLoading && 'active'}
          ></ProgressSpan>
        </dd>
      </dl>
      <dl>
        <dt>JavaScript</dt>
        <dd>
          <p>{skillPercent.javascript}%</p>
          <ProgressSpan
            width={skillPercent.javascript}
            className={!isLoading && 'active'}
          ></ProgressSpan>
        </dd>
      </dl>
      <dl>
        <dt>React</dt>
        <dd>
          <p>{skillPercent.react}%</p>
          <ProgressSpan
            width={skillPercent.react}
            className={!isLoading && 'active'}
          ></ProgressSpan>
        </dd>
      </dl>
      <dl>
        <dt>Photoshop</dt>
        <dd>
          <p>{skillPercent.photoshop}%</p>
          <ProgressSpan
            width={skillPercent.photoshop}
            className={!isLoading && 'active'}
          ></ProgressSpan>
        </dd>
      </dl>
      <p>
        웹 표준에 맞는 코드 구현이 가능하고, 크로스 브라우징 이슈를 해결하기
        위해
        <br />
        항상 노력합니다. 자바스크립트, 제이쿼리는 간단한 기능 구현 가능 및
        <br />
        리액트 프레임워크로 서비스 오픈 후 지속적인 스터디를 통해 스킬업
        <br />
        중입니다.
      </p>
    </CommonStyle.Section>
  );
}
