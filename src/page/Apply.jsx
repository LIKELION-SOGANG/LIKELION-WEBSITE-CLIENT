import React, { useState } from 'react';
import styled from 'styled-components';
import TopBanner from '../components/Recruit/TopBanner';
import NewApplication from '../components/Recruit/NewApplication';
import ExistingApplication from '../components/Recruit/ExistingApplication';
import Progress from '../components/Recruit/Progress';
import InputField from '../components/Recruit/InputField';
import Form from '../components/Recruit/Form';
const Apply = () => {
  const [page, setPage] = useState('new');
  return (
    <ApplyContainer>
      <TopBanner />
      <Progress />
      <Form />
      {/* <div style={{ marginBottom: '19rem' }} /> */}
      {/* {page === 'new' && <NewApplication />} */}
      {/* <div style={{ marginBottom: '7rem' }} /> */}
      {/* {page === 'new' && <ExistingApplication />} */}
      {/* <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
      >
        <button onClick={() => setPage('new')}>신규 지원서 작성</button>
        <button onClick={() => setPage('existing')}>기존 지원서 수정</button>
      </div> */}
    </ApplyContainer>
  );
};

const ApplyContainer = styled.div`
  width: 100%;
  height: auto%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
export default Apply;
