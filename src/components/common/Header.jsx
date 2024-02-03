import React from 'react';
import styled from 'styled-components';
function Header() {
  return (
    <HeaderWrapper>
      <MenuList>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem> <MenuItem></MenuItem> <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </MenuList>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
`;
const MenuList = styled.ul`
  diplay: flex;
  gap: 1.5rem;
`;
const MenuItem = styled.div`
    font-size: 
    color:white;
`;
export default Header;
