import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
function Header() {
  const { pathname } = useLocation();
  const [activate, setActivate] = useState({
    about: false,
    people: false,
    projects: false,
    recruit: false,
    contact: false,
  });
  useEffect(() => {
    if (pathname === '/') {
      setActivate({ ...activate, about: true });
    } else {
      setActivate({ ...activate, [pathname.slice(1)]: true });
    }
  }, [pathname]);
  return (
    <HeaderWrapper>
      <MenuList>
        <Link to={'/'}>
          <MenuItem $isActive={activate?.about}>About</MenuItem>
        </Link>
        <Link to={'/people'}>
          <MenuItem $isActive={activate?.people}>People</MenuItem>
        </Link>
        <Link to={'/projects'}>
          <MenuItem $isActive={activate?.projects}>Projects</MenuItem>
        </Link>
        <Link to={'/recruit'}>
          <MenuItem $isActive={activate?.recruit}>Recruit</MenuItem>
        </Link>
        <Link to="contact">
          <MenuItem $isActive={activate?.contact}>Contact</MenuItem>
        </Link>
      </MenuList>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const MenuList = styled.ul`
  display: flex;
  margin-left: auto;
  gap: 2.5rem;
`;
const MenuItem = styled.div`
  font-size: 2rem;
  color: white;
  font-family: 'PP-Editorial';
  font-weight: ${(props) => (props.$isActive ? 400 : 300)};
  border-bottom: ${(props) => (props.$isActive ? '1px solid white' : 'none')};
  font-style: italic;
  transition: 1s;
`;
export default Header;
