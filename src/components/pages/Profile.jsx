import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommonStyle from '../../assets/style/CommonStyle';

const ProfileBox = styled.dl`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  dt {
    flex: 0 1 20%;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }

  dd {
    flex: 0 1 80%;
    margin-bottom: 1.5rem;
  }
`;

export default function Profile() {
  return (
    <CommonStyle.Section>
      <CommonStyle.H3 showType="block">프로필</CommonStyle.H3>
      <ProfileBox>
        <dt>이름</dt>
        <dd>이지희</dd>
        <dt>연락처</dt>
        <dd>010&ndash;9109&ndash;0479</dd>
        <dt>이메일</dt>
        <dd>dlwlgml20@gmail.com</dd>
        <dt>홈페이지</dt>
        <dd>
          <a href="https://jihui20.github.io/portfolio/" target="_blank">
            https://jihui20.github.io/portfolio/
          </a>
        </dd>
      </ProfileBox>
    </CommonStyle.Section>
  );
}
