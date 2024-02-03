import React from 'react';
import styled from 'styled-components';

function Space({ width, height }) {
  return <StyledSpace $width={width} $height={height}></StyledSpace>;
}

const StyledSpace = styled.div`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;
export default Space;
