import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  faChevronUp,
  faChevronDown,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/icon/arrow.svg';
import { useMousePosition } from '../../util/MouseContextProvider';
import { motion } from 'framer-motion';

const faqData = [
  {
    title: '전공자만 지원할 수 있나요?',
    content:
      '1학기 중 매주 화요일과 금요일 오후 7시, 서강대학교 내 강의실에서 약 2시간 진행됩니다. \n교육 세션은 필수 행사이기 때문에 반드시 참여하셔야 합니다.',
  },
  {
    title: '교육 세션은 언제 어디서 진행되나요?',
    content:
      '주 2회 교육 세션과 해커톤, 데모데이 등 필수 행사에 참가가 가능한 서강대학교 학생이라면 나이와 학기, 전공에 상관 없이 자유롭게 지원 가능합니다.',
  },
  {
    title: '어떤 것을 배우나요?',
    content:
      '아기 사자는 웹 프로그래밍을 공부하고 자신의 아이디어를 담은 웹사이트를 직접 제작하고 배포합니다.\n자세한 사항은 홈페이지 ',
  },
  {
    title: '프로그래밍과 개발을 잘 모르는데 괜찮나요?',
    content:
      '프로그래밍과 개발을 배우겠다는 의미와 열정만 있다면 괜찮습니다. \n멋쟁이사자처럼 서강대학교의 커리큘럼은 프로그래밍 기초부터 구성되어 있습니다.',
  },
  {
    title: '면접은 어떤 방식으로 진행되나요?',
    content:
      '서강대학교 내 강의실에서 대면 면접으로 진행됩니다. 면접 시간은 서류에 적어주신 면접 가능 시간을 토대로 배정됩니다.',
  },
  {
    title: '개인 노트북이 꼭 있어야 하나요?',
    content:
      '교육 세션이 개인 노트북으로 실습하면서 진행되기 때문에, 개인 노트북이 없으면 참여 불가능합니다.',
  },
  {
    title: '1년 내내 참가해야 하나요?',
    content:
      '교육 세션, 데모데이 등 필수 행사가 1년에 걸쳐 있기 때문에 1년 동안 참여 가능해야 지원하실 수 있습니다. \n다만, 시험 기간에는 세션이 진행되지 않으니 참고해주세요. ',
  },
  {
    title: '모바일로도 서류 지원이 가능한가요?',
    content: '모바일은 지원하고 있지 않습니다.  ',
  },
];
const Faq = () => {
  const [openIndex, setOpenIndex] = useState([]);
  const navigate = useNavigate();
  const { textEnter, textLeave } = useMousePosition();

  const [state, setState] = useState([
    'close',
    'close',
    'close',
    'close',
    'close',
    'close',
    'close',
    'close',
  ]);

  const handleToggle = (index) => {
    const isOpened = openIndex.includes(index);
    if (isOpened) {
      setOpenIndex(openIndex.filter((currentIndex) => currentIndex !== index));
      let copyState = [...state];
      copyState[index] = 'close';
      setState(copyState);
    } else {
      setOpenIndex([...openIndex, index]);
      let copyState = [...state];
      copyState[index] = 'open';
      setState(copyState);
    }
  };
  return (
    <FaqContainer>
      <Topic>FAQ</Topic>
      {faqData.map((item, index) => (
        <Item
          key={item.title}
          className={openIndex.includes(index) ? 'expanded' : ''}
          isOpen={openIndex.includes(index)}
        >
          <Question onClick={() => handleToggle(index)}>
            {item.title}
            <motion.div
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              animate={{ rotate: openIndex.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                transformOrigin: 'center',
              }}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ cursor: 'pointer' }}
              />
            </motion.div>
          </Question>
          <Answer className={state[index]}>
            <ItemContainer>
              {item.content.includes('홈페이지') ? (
                <>
                  {item.content.replace('About 탭을 참고해 주세요.', '')}
                  <Move
                    href="/"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    <img src={arrow} />
                    About 탭
                  </Move>
                  을 참고해주세요.
                </>
              ) : (
                item.content
              )}
            </ItemContainer>
          </Answer>
        </Item>
      ))}
    </FaqContainer>
  );
};
const dropDown = keyframes`
0% {
    max-height: 0;
}
100% {
    max-height: 300px;
}

`;
const dropUp = keyframes`
0% {
    max-height: 300px;
}
100% {
    max-height: 0;
}

`;

const FaqContainer = styled.div`
  max-width: 97rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Topic = styled.div`
  text-align: center;
  font-size: 3.2rem;
  color: var(--Main, #000);
  font-family: 'PP-Editorial';
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

const Item = styled.div`
  width: 100%;
  margin-top: 3.9rem;
  padding: 1.7rem 2.1rem;
  border-radius: 1rem;
  background: #f4f4f4;
  bottom: 0;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
  // position: relative;
  // z-index: 100;
  // margin-bottom: 10rem;
  height: max-content;
`;

const TextBase = styled.div`
  color: var(--Main, #000);
  font-family: Pretendard;
  line-height: normal;
  font-style: normal;
  white-space: pre-line;
`;

const Question = styled(TextBase)`
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Answer = styled.div`
  width: 100%;
  max-height: 0;
  overflow: hidden;

  &.open {
    animation: ${dropDown} 1.5s ease forwards;
  }
  &.close {
    animation: ${dropUp} 0.4s ease;
  }
`;

const ItemContainer = styled(TextBase)`
  // width: 100%;
  // padding: 1.7rem 2.1rem;
  // border-radius: 1rem;
  // background: #f4f4f4;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.3rem;
  margin-top: 1.4rem;
`;

const Move = styled(motion.a)`
  display: inline-flex;
  color: #b7b7b7;
  text-decoration: underline;
  align-items: center;
  justify-content: center;
`;

export default Faq;
