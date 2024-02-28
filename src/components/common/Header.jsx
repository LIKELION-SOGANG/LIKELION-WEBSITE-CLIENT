import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../util/MouseContextProvider';
import { AnimatePresence } from 'framer-motion';
import useLoading from '../../hooks/useLoading';
import Loading from '../../page/Loading';
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
  useEffect(() => {
    if (pathname === '/') {
      setActivate({ ...activate, about: true });
    } else {
      setActivate({ ...activate, [pathname.slice(1)]: true });
    }
    window.scrollTo({ top: 0 });
  }, [pathname]);
  const tabs = ['6th', '7th', '8th', '9th', '10th', '11th'];
  const [selectedTab, setSelectedTab] = useState('11th');
  const [selectedProjects, setSelectedProjects] = useState([]);
  const { isLoading, loadingProgress } = useLoading(4);
  const navigate = useNavigate();
  return (
    <HeaderWrapper $isBackGroundBlack={isBackGroundBlack}>
      <AnimatePresence>
        {isLoading && <Loading progress={loadingProgress} />}
      </AnimatePresence>
      <MenuList>
        <LogoItem
          $isBackGroundBlack={isBackGroundBlack}
          $isVisibleHeaderLogo={isVisibleHeaderLogo}
          onClick={() => {
            window.scrollTo({ top: 0 });
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
  z-index: 7000;
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
<<<<<<< HEAD

// Header의 props이 변하지 않을 경우 리렌더링 방지
=======
const PossibiltyCaption = React.memo(styled.div`
  position: absolute;
  bottom: 5rem;
  left: 2rem;
  -webkit-transition: all 0.1s cubic-bezier(0.25, 0.25, 0.75, 0.75);
  font-weight: 400;
  font-family: 'PP-Editorial';
  color: ${(props) => (props.$isBackGroundBlack ? 'white' : 'black')};
`);
const Possibility = styled.div`
  leading-trim: both;
  text-edge: cap;
  font-size: 3.2rem;
  font-style: italic;
  line-height: normal;
  text-transform: capitalize;
`;
const To = styled.div`
  font-size: 2rem;
  position: absolute;
  top: 3.6rem;
  left: 3.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: lowercase;
`;
const Reality = styled.div`
  font-size: 3.2rem;
  position: absolute;
  top: 3.9rem;
  left: 5.7rem;
  font-style: italic;
`;

>>>>>>> e9824e03e1ad929d4d0886899eb7181fed432c40
export default React.memo(Header);
