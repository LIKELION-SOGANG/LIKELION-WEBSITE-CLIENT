import React from 'react';
import styled from 'styled-components';

function Footer({ isBackgroundBlack = true }) {
  return (
    <FooterWrapper isBackgroundBlack={isBackgroundBlack}>
      <div className="inner">
        <div className="total-today">
          <div className="total">
            <Tag isBackgroundBlack={isBackgroundBlack}>total</Tag>
            <TagNum isBackgroundBlack={isBackgroundBlack}>300</TagNum>
          </div>
          <div className="today">
            <Tag isBackgroundBlack={isBackgroundBlack}>today</Tag>
            <TagNum isBackgroundBlack={isBackgroundBlack}>23</TagNum>
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
            >
              likelion_sg@gmail.com
            </Link>
          </p>
        </div>
        <div className="credits">
          <p className="content2">
            <u>
              <a href="/credits" title="처음 만든 사람들">
                ↖︎ Credits{' '}
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
    width: 90%;
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
    border-bottom: 1px solid white;
    transform: scaleX(0);
  }
  &:hover {
    &:after {
      transform: scale(1);
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
  font-family: 'PP-Editorial';
  font-size: 1.5rem;
`;

export default Footer;
