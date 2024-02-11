import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../util/MouseContextProvider';
// 헤더 배경 검은색 , 헤더 로고 보일지 여부 props 전달받기 (기본값 true)
function Header({ isBackGroundBlack = true, isVisibleHeaderLogo = true }) {
  const { textEnter, textLeave } = useMousePosition();

  const { pathname } = useLocation();
  const [activate, setActivate] = useState({
    about: false,
    people: false,
    projects: false,
    recruit: false,
    contact: false,
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === '/') {
      setActivate({ ...activate, about: true });
    } else {
      setActivate({ ...activate, [pathname.slice(1)]: true });
    }
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <HeaderWrapper $isBackGroundBlack={isBackGroundBlack}>
      <MenuList>
        <LogoItem
          $isBackGroundBlack={isBackGroundBlack}
          $isVisibleHeaderLogo={isVisibleHeaderLogo}
          onClick={() => {
            navigate('/');
          }}
        >
          Like<span>lion</span> So<span>gang</span>
        </LogoItem>
        <Link to={'/'}>
          <MenuItem
            $isActive={activate?.about}
            $isBackGroundBlack={isBackGroundBlack}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            About
          </MenuItem>
        </Link>
        <Link to={'/people'}>
          <MenuItem
            $isActive={activate?.people}
            $isBackGroundBlack={isBackGroundBlack}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            People
          </MenuItem>
        </Link>
        <Link to={'/projects'}>
          <MenuItem
            $isActive={activate?.projects}
            $isBackGroundBlack={isBackGroundBlack}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Projects
          </MenuItem>
        </Link>
        <Link to={'/recruit'}>
          <MenuItem
            $isActive={activate?.recruit}
            $isBackGroundBlack={isBackGroundBlack}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Recruit
          </MenuItem>
        </Link>
        <Link to="/contact">
          <MenuItem
            $isActive={activate?.contact}
            $isBackGroundBlack={isBackGroundBlack}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
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
  z-index: 9000;
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
  cursor: pointer;
  font-family: 'PP-Editorial';
  color: ${(props) => (props.$isBackGroundBlack ? 'white' : 'black')};
  margin-right: auto;
  visibility: ${(props) => (props.$isVisibleHeaderLogo ? 'visible' : 'hidden')};
  span {
    font-style: italic;
  }
`;
const MenuItem = styled(motion.div)`
  font-size: 2rem;
  display: inline-block;
  color: ${(props) => (props.$isBackGroundBlack ? 'white' : 'black')};
  font-family: 'PP-Editorial';
  font-weight: ${(props) => (props.$isActive ? 400 : 300)};
  border-bottom: ${(props) =>
    !props.$isActive
      ? 'none'
      : props.$isBackGroundBlack
        ? '1px solid white'
        : '1px solid black'};
  font-style: italic;
  cursor: pointer;
  transition: all 0.3s ease;
  &:after {
    content: '';
    display: block;
    transform: scaleX(0);
    border-bottom: ${(props) =>
      props.$isActive
        ? 'none'
        : props.$isBackGroundBlack
          ? '1px solid white'
          : '1px solid black'};
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;
export default React.memo(Header);
