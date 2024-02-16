import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMousePosition } from '../../util/MouseContextProvider';
import { instance } from '../../api/axios';

function Footer({ isBackgroundBlack = true }) {
  const { textEnter, textLeave } = useMousePosition();
  const [visitNum, setVisitNum] = useState({ total_visit: 0, today_visit: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get('visit/');
      setVisitNum(res?.data?.data);
    };
    fetchData();
  }, []);
  return (
    <FooterWrapper isBackgroundBlack={isBackgroundBlack}>
      <div className="inner">
        <div className="total-today">
          <div className="total">
            <Tag isBackgroundBlack={isBackgroundBlack}>total</Tag>
            <TagNum isBackgroundBlack={isBackgroundBlack}>
              {visitNum.total_visit}
            </TagNum>
          </div>
          <div className="today">
            <Tag isBackgroundBlack={isBackgroundBlack}>today</Tag>
            <TagNum isBackgroundBlack={isBackgroundBlack}>
              {visitNum.today_visit}
            </TagNum>
          </div>
        </div>
        <div className="instagram">
          <p className="content">
            Instagram.
            <br />{' '}
            <Link
              href="https://www.instagram.com/likelion_sg/"
              target="_blank"
              title="새 탭에서 멋사 인스타그램 열기"
              rel="noreferrer"
              isBackgroundBlack={isBackgroundBlack}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              @likelion_sg
            </Link>
          </p>
        </div>
        <div className="email">
          <p className="content">
            Email. <br />
            <Link
              href="mailto:likelion_sg@gmail.com"
              title="멋사 서강대로 메일 보내기"
              isBackgroundBlack={isBackgroundBlack}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              likelion_sg@gmail.com
            </Link>
          </p>
        </div>
        <div className="credits">
          <p className="content2">
            <u>
              <a
                href="/credits"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Credits ↘{' '}
              </a>
            </u>
            <br />© Likelion Sogang. All Rights Reserved.
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${(props) => (props.isBackgroundBlack ? 'black' : 'white')};
  color: ${(props) => (props.isBackgroundBlack ? 'white' : 'black')};
  font-family: 'PP-Editorial';
  .inner {
    width: calc(100% - 5rem);
    margin: 0 auto;
    height: 6.4rem;
    align-items: center;
    display: flex;
    gap: 2.5rem;
  }
  .total-today {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .total {
    display: flex;
    gap: 0.5rem;
    height: 2.4rem;
    align-items: center;
  }
  .today {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .instagram,
  .email {
    line-height: 120%;
    font-size: 1.5rem;
  }
  .credits {
    flex: 1;
    line-height: 120%;
    font-size: 1.5rem;
  }
  p.content2 {
    line-height: 150%;
    text-align: right;
  }
  p.content {
    line-height: 150%;
    text-align: left;
  }
`;

const Link = styled.a`
  display: inline-block;
  font-size: 1.5rem;
  font-family: 'PP-Editorial';
  &:after {
    content: '';
    display: block;
    transition: transform 250ms ease-in-out;
    border-bottom: 1px solid
      ${(props) => (props.isBackgroundBlack ? 'white' : 'black')};
    transform: scaleX(0);
  }
  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;

const Tag = styled.div`
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  background-color: ${(props) => (props.isBackgroundBlack ? 'white' : 'black')};
  color: ${(props) => (props.isBackgroundBlack ? 'black' : 'white')};
`;

const TagNum = styled.div`
  padding-top: 0.4rem;
  font-family: 'PP-Editorial';
  font-size: 1.5rem;
`;

export default Footer;
