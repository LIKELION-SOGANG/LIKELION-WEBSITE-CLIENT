import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMousePosition } from '../../util/MouseContextProvider';
import { instance } from '../../api/axios';

function MobileFooter({ isBackgroundBlack = true }) {
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
    <FooterWrapper $isBackgroundBlack={isBackgroundBlack}>
      <div className="inner">
        <div className="flex1">
          <div className="flex-item left">
            <div className="insta">Instagram.</div>
            <div className="id">@likelion_sg</div>
          </div>
          <div className="credit">
            <a
              href="/credits"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Credits ↘{' '}
            </a>
          </div>
        </div>
        <div className="flex2">
          <div className="flex-item left">
            <div className="email">Email.</div>
            <div className="id">likelion_sg@gmail.com</div>
          </div>
          <div className="flex-item right">
            <div className="number">
              total {visitNum.total_visit} | today {visitNum.today_visit}
            </div>
            <div className="copyright">
              © likelion Sogang. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${(props) =>
    props.$isBackgroundBlack ? 'black' : 'white'};
  color: ${(props) => (props.$isBackgroundBlack ? 'white' : 'black')};
  font-family: 'PP-Editorial';
  .inner {
    width: calc(100% - 5rem);
    margin: 0 auto;
    gap: 2.5rem;
  }
  .credit {
    color: ${(props) => (props.$isBackgroundBlack ? 'white' : 'black')};
    text-align: right;
    font-size: 2.6rem;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    text-transform: capitalize;
  }
  .flex1 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.3rem;
  }
  .flex-item {
    display: flex;
    font-size: 1.2rem;
    flex-direction: column;
    gap: 0.4rem;
  }
  .left {
    align-items: flex-start;
  }
  .right {
    align-items: flex-end;
  }
  .flex2 {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
  }
`;

export default MobileFooter;
