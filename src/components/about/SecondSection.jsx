import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Space from '../../util/Space';

function SecondSection() {
  const capitonRef1 = useRef(null);
  useEffect(() => {
    gsap.to(capitonRef1.current, {
      scrollTrigger: capitonRef1.current,
      x: 500,
    });
  }, []);
  return (
    <SeondWholeSection>
      <Space height={'40rem'} />
      <p ref={capitonRef1}>
        멋쟁이사자처럼 대학은 국내외 <span>121개</span> 대학이 참여하는 국내
        최대 규모의 IT 창업 동아리입니다.
      </p>
    </SeondWholeSection>
  );
}

const SeondWholeSection = styled.section`
  background-color: white;
  height: 200vh;
  p {
    font-size: 2rem;
    color: black;
    font-weight: 500;
    text-align: center;
  }
  p > span {
    font-weight: 700;
  }
`;

export default SecondSection;
