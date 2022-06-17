import { useState } from 'react';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';

import * as S from './styles';

function Nav() {
  const [active, setActive] = useState('/#');
  return (
    <S.Nav>
      <S.Link href="/#" active={active === '/#'} onClick={() => setActive('/#')}>
        <AiOutlineHome />
      </S.Link>
      <S.Link href="#about" active={active === '#about'} onClick={() => setActive('#about')}>
        <AiOutlineUser />
      </S.Link>
      <S.Link
        href="#experience"
        active={active === '#experience'}
        onClick={() => setActive('#experience')}
      >
        <BiBook />
      </S.Link>
      <S.Link
        href="#portfolio"
        active={active === '#portfolio'}
        onClick={() => setActive('#portfolio')}
      >
        <BsCodeSlash />
      </S.Link>
      <S.Link href="#contact" active={active === '#contact'} onClick={() => setActive('#contact')}>
        <BiMessageSquareDetail />
      </S.Link>
    </S.Nav>
  );
}

export default Nav;
