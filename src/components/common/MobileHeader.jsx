import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../util/MouseContextProvider';
import { AnimatePresence } from 'framer-motion';
import useLoading from '../../hooks/useLoading';
import Loading from '../../page/Loading';
import Caption from '../../assets/caption/about-caption.svg';
import WhiteCaption from '../../assets/caption/about-caption-white.svg';
import xiconblack from '../../assets/icon/x-icon-black.svg';
import xiconwhite from '../../assets/icon/x-icon-white.svg';
import menuBlack from '../../assets/icon/menu-icon-black.svg';
import menuWhite from '../../assets/icon/menu-icon-white.svg';
import Space from '../../util/Space';
// 헤더 배경 검은색 , 헤더 로고 보일지 여부 props 전달받기 (기본값 true)
function MobileHeader({
  isBackGroundBlack = true,
  isVisibleHeaderLogo = true,
}) {
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
  const { isLoading, loadingProgress } = useLoading(4);
  const [isSpreadMenu, setIsSpreadMenu] = useState(false);
  return (
    <HeaderWrapper $isBackGroundBlack={isBackGroundBlack}>
      <div className="inner">
        <AnimatePresence>
          {isLoading && <Loading progress={loadingProgress} />}
        </AnimatePresence>
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
         {/* {spreadMenu ? (
          <XIcon
            src={isBackGroundBlack ? xiconwhite : xiconblack}
            alt="X아이콘"
          />
        ) : (
          <MenuIcon src={isBack GroundBlack ? menuWhite : menuBlack} />
        )} */}
          <ToggleMenu
            onClick={() => {
              setIsSpreadMenu(!isSpreadMenu);
            }}
          >
            <Span
              $isBackGroundBlack={isBackGroundBlack}
              $isSpreadMenu={isSpreadMenu}
            ></Span>
          </ToggleMenu>
        </MenuList>
      </div>
      <SlideMenu
        $isSpreadMenu={isSpreadMenu}
        $isBackGroundBlack={isBackGroundBlack}
      >
        <Space height={'10rem'} />
        <SlideItem $isBackGroundBlack={isBackGroundBlack} href="/">
          About
        </SlideItem>
        <SlideItem $isBackGroundBlack={isBackGroundBlack} href="/people">
          People
        </SlideItem>
        <SlideItem $isBackGroundBlack={isBackGroundBlack} href="/projects">
          Projects
        </SlideItem>
        <SlideItem $isBackGroundBlack={isBackGroundBlack} href="/recruit">
          Recruit
        </SlideItem>
        <SlideItem $isBackGroundBlack={isBackGroundBlack} href="/contact">
          Contact
        </SlideItem>
        <PossibleCaption src={isBackGroundBlack ? Caption : WhiteCaption} />
      </SlideMenu>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 9;
  transition: 1s;
  background-color: ${(props) =>
    props.$isBackGroundBlack ? 'black' : 'white'};
  .inner {
    z-index: 7000;
    padding: 2.5rem;
    width: 100vw;
    display: flex;
  }
`;
const MenuList = styled.ul`
  display: flex;
  width: 100%;
  gap: 2.5rem;
`;

const ToggleMenu = styled.div`
  display: block;
  position: relative;
  width: 2rem;
  height: 2rem;
`;
const SlideMenu = styled.ul`
  width: 100vw;
  height: calc(100vh - 7.2rem);
  position: fixed;
  bottom: 0;
  transition: 0.5s;
  transform: ${(props) =>
    !props.$isSpreadMenu && 'translateY(calc(100vh - 7.2rem))'};
  background-color: ${(props) =>
    props.$isBackGroundBlack ? 'black' : 'white'};
  color: ${(props) => (props.$isBackGroundBlack ? 'white' : 'black')};
  border-bottom: 1px solid white;
  z-index: 5000;
`;

const SlideItem = styled.a`
  display: block;
  font-family: 'PP-Editorial';
  font-size: 3.2rem;
  border-bottom: ${(props) =>
    props.$isBackGroundBlack ? '1px solid white' : '1px solid black'};
  font-style: normal;
  font-weight: 200;
  padding: 1.1rem 3rem;
  line-height: normal;
  text-transform: capitalize;
`;

const Span = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  width: 100%;
  backgroud: yellow;
  height: 0.2rem;
  color: transparent;
  transform: translate(0, -30%);
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background: ${(props) => (props.$isBackGroundBlack ? 'white' : 'black')};
    transition: all 0.4s;
  }
  &:before {
    top: -0.2rem;
    transform: ${(props) =>
      props.$isSpreadMenu ? 'rotate(45deg) translate(0.23rem, 0.3rem)' : ''};
  }
  &:after {
    top: 0.2rem;
    transform: ${(props) => (props.$isSpreadMenu ? 'rotate(-45deg)' : '')};
  }
`;

const PossibleCaption = styled.img`
  position: absolute;
  bottom: 3.3rem;
  right: 2.6rem;
`;

const MenuIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const XIcon = styled.img`
  width: 2rem;
  height: 2rem;
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
export default React.memo(MobileHeader);
