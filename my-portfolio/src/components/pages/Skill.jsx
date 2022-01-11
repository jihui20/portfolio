import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommonStyle from '../../assets/style/CommonStyle';
import SkillData from '../../data/SkillData.json';

const SkillBox = styled.div`
  dt {
    font-weight: 800;
    font-size: 1.8rem;
  }
`;

const ProgressSpan = styled.span`
  position: relative;
  display: block;
  width: 80%;
  height: 2.5rem;
  background-color: #ccc;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #fcad3d;
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
      <CommonStyle.H3>스킬</CommonStyle.H3>
      <SkillBox>
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
        {SkillData &&
          SkillData.map((list) => {
            return (
              <dl key={list.sortNum}>
                <dt>{list.skill}</dt>
                <dd>
                  <ProgressSpan
                    width={list.percent}
                    className={!isLoading && 'active'}
                  ></ProgressSpan>
                </dd>
              </dl>
            );
          })}
      </SkillBox>
    </CommonStyle.Section>
  );
}
