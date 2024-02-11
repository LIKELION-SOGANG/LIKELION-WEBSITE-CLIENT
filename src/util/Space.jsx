import React, { forwardRef } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line react/display-name
const Space = forwardRef(({ width, height }, ref) => {
  return <StyledSpace $width={width} $height={height} ref={ref}></StyledSpace>;
});

const StyledSpace = styled.div`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

export default Space;
