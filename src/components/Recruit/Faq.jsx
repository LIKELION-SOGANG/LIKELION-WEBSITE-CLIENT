import React, { useState } from 'react';
import styled from 'styled-components';
import {
  faChevronUp,
  faChevronDown,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

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
    title: '어떤 것을 배우나요??',
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
    content: '',
  },
  {
    title: '개인 노트북이 꼭 있어야 하나요?',
    content: '세션의 원활한 진행을 위해서 개인 노트북은 꼭 필요합니다.',
  },
  {
    title: '1년 내내 참가해야 하나요?',
    content: '',
  },
  {
    title: '모바일로도 서류 지원이 가능한가요?',
    content: '모바일은 지원하고 있지 않습니다.  ',
  },
];
const Faq = () => {
  const [openIndex, setOpenIndex] = useState([]);
  const navigate = useNavigate();

  const handleToggle = (index) => {
    const isOpened = openIndex.includes(index);
    setOpenIndex(
      isOpened
        ? openIndex.filter((currentIndex) => currentIndex !== index)
        : [...openIndex, index],
    );
  };
  return (
    <FaqContainer>
      <Topic>FAQ</Topic>
      {faqData.map((item, index) => (
        <Item key={item.title}>
          <Question onClick={() => handleToggle(index)}>
            {item.title}
            <FontAwesomeIcon
              icon={openIndex.includes(index) ? faChevronUp : faChevronDown}
              style={{ cursor: 'pointer' }}
            />
          </Question>
          {openIndex.includes(index) && (
            <Answer>
              {item.content.includes('홈페이지') ? (
                <>
                  {item.content.replace('About 탭을 참고해 주세요.', '')}
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="about-link-icon"
                    />
                    About 탭
                  </a>
                  을 참고해주세요.
                </>
              ) : (
                item.content
              )}
            </Answer>
          )}
        </Item>
      ))}
      {/* <Button
        onClick={() => {
          navigate('/recruit/apply');
        }}
      /> */}
      <Button onClick={() => alert('아직 지원기간이 아닙니다.')} />
    </FaqContainer>
  );
};

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
  height: 100%;
  margin-top: 3.9rem;
  padding: 1.7rem 2.1rem;
  border-radius: 1rem;
  bottom: 0;
  //   align-items: flex-start;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
  background: #f4f4f4;
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
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Answer = styled(TextBase)`
  margin-top: 1.4rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 200%;
  a {
    color: #b7b7b7;
    text-decoration: underline;
    // display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const Button = styled.div`
  position: fixed;
  right: 2%;
  bottom: 2%;
  width: 15rem;
  height: 4.28rem;
  display: inline-flex;
  padding: 0.3rem 0.3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border-radius: 5rem;
  background: #000;
  color: #fff;
  font-family: Figtree;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  // z-index: 500;
  &::before {
    content: 'Apply Now';
    display: block;
  }

  // 호버 상태에서의 텍스트 변경
  &:hover::before {
    content: '12기 지원하기';
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export default Faq;
