import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
// 헤더 배경 검은색 , 헤더 로고 보일지 여부 props 전달받기 (기본값 true)
function Header({ isBackGroundBlack = true, isVisibleHeaderLogo = true }) {
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
    <HeaderWrapper $isBackGroundBlack={isBackGroundBlack}>
      <MenuList>
        <LogoItem
          $isBackGroundBlack={isBackGroundBlack}
          $isVisibleHeaderLogo={isVisibleHeaderLogo}
        >
          Like<span>lion</span> So<span>gang</span>
        </LogoItem>
        <Link to={'/'}>
          <MenuItem
            $isActive={activate?.about}
            $isBackGroundBlack={isBackGroundBlack}
          >
            About
          </MenuItem>
        </Link>
        <Link to={'/people'}>
          <MenuItem
            $isActive={activate?.people}
            $isBackGroundBlack={isBackGroundBlack}
          >
            People
          </MenuItem>
        </Link>
        <Link to={'/projects'}>
          <MenuItem
            $isActive={activate?.projects}
            $isBackGroundBlack={isBackGroundBlack}
          >
            Projects
          </MenuItem>
        </Link>
        <Link to={'/recruit'}>
          <MenuItem
            $isActive={activate?.recruit}
            $isBackGroundBlack={isBackGroundBlack}
          >
            Recruit
          </MenuItem>
        </Link>
        <Link to="contact">
          <MenuItem
            $isActive={activate?.contact}
            $isBackGroundBlack={isBackGroundBlack}
          >
            Contact
          </MenuItem>
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
`;
const MenuList = styled.ul`
  display: flex;
  width: 100%;
  gap: 2.5rem;
`;

const LogoItem = styled.div`
  font-size: 2rem;
  padding-bottom: 0.2rem;
  font-family: 'PP-Editorial';
  color: ${(props) => (props.$isBackGroundBlack ? 'white' : 'black')};
  margin-right: auto;
  visibility: ${(props) => (props.$isVisibleHeaderLogo ? 'visible' : 'hidden')};
  span {
    font-style: italic;
  }
`;
const MenuItem = styled.div`
  font-size: 2rem;
  color: ${(props) => (props.$isBackGroundBlack ? 'white' : 'black')};
  font-family: 'PP-Editorial';
  font-weight: ${(props) => (props.$isActive ? 400 : 300)};
  border-bottom: ${(props) => (props.$isActive ? '1px solid white' : 'none')};
  font-style: italic;
  transition: 1s;
`;

// Header의 props이 변하지 않을 경우 리렌더링 방지
export default React.memo(Header);
