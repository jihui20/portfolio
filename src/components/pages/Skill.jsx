import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommonStyle from '../../assets/style/CommonStyle';
import SkillData from '../../data/SkillData.json';

import HtmlIco from '../../assets/images/ico_html_v2.png';
import CssIco from '../../assets/images/ico_css_v2.png';
import JavascriptIco from '../../assets/images/ico_javascript_v2.png';
import JqueryIco from '../../assets/images/ico_jquery.png';
import ReactIco from '../../assets/images/ico_react.png';
import PhotoshopIco from '../../assets/images/ico_photoshop.png';

const SkillListBox = styled.div`
  padding-bottom: 4rem;

  p {
    margin-bottom: 3rem;
    font-size: 1.6rem;
    line-height: 1.5;
    word-break: keep-all;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      flex: 1 0 auto;
      width: 31%;
      margin: 1rem 1rem 1rem 0;
      font-weight: 800;
      text-align: center;
      box-sizing: border-box;

      &:nth-of-type(3n) {
        margin-right: 0;
      }

      dt {
        .skill-thumb {
          display: block;
          width: 10rem;
          height: 15rem;
          margin: 0 auto;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-size: 100%;
        }
      }

      dd {
        margin-top: 1.5rem;
        font-weight: 300;

        p {
          padding-left: 1.5rem;
        }

        span {
          display: block;
          margin-bottom: 0.5rem;
          line-height: 1.3;
          text-indent: -1.5rem;

          &::before {
            content: '-';
            display: inline-block;
            /* width: 0.9rem;
            height: 0.5rem;
            margin: 0.45rem 0.5rem 0 0;
            border: 0.2rem solid #000;
            border-top: 0;
            border-right: 0;
            vertical-align: top;
            transform: rotate(-45deg); */
          }
        }
      }

      &.html5 {
        .skill-thumb {
          background-image: url(${HtmlIco});
        }
      }

      &.css3 {
        .skill-thumb {
          background-image: url(${CssIco});
        }
      }

      &.javascript {
        .skill-thumb {
          background-image: url(${JavascriptIco});
        }
      }

      &.jquery {
        .skill-thumb {
          background-image: url(${JqueryIco});
        }
      }

      &.react {
        .skill-thumb {
          background-image: url(${ReactIco});
        }
      }

      &.photoshop {
        .skill-thumb {
          background-image: url(${PhotoshopIco});
        }
      }
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    ul {
      li {
        flex: 1 0 auto;
        width: 47%;
        margin: 0 1.5rem 1rem 0;

        &:nth-of-type(2n) {
          margin-right: 0;
        }

        &:nth-of-type(3n) {
          margin-right: 1.5rem;
        }
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    ul {
      li {
        flex: 1 0 auto;
        width: 100%;
        margin: 0 0 4rem 0;

        &:nth-of-type(3n) {
          margin-right: 0;
        }
      }
    }
  }
`;

export default function Skill() {
  return (
    <CommonStyle.Section>
      <CommonStyle.H3 showType="block">스킬</CommonStyle.H3>
      <SkillListBox>
        <ul>
          {SkillData &&
            SkillData.map((list) => {
              return (
                <li key={list.sortNum} className={list.skill.toLowerCase()}>
                  <dl>
                    <dt>
                      <span className="skill-thumb">
                        <CommonStyle.Blind>
                          {list.skill.toLowerCase()}
                        </CommonStyle.Blind>
                      </span>
                    </dt>
                    <dd>
                      <p>
                        {list.infoList &&
                          list.infoList.map((infoList) => {
                            return (
                              <span key={infoList.sortNum}>
                                {infoList.desc}
                              </span>
                            );
                          })}
                      </p>
                    </dd>
                  </dl>
                </li>
              );
            })}
        </ul>
      </SkillListBox>
    </CommonStyle.Section>
  );
}
