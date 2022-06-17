import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { Button, TextLight } from '../../styles/globalStyles';
import cvDanielDalcastagne from '../../assets/cvDanielDalcastagne.pdf';

import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <S.HeaderContainer>
        <h5>Olá, eu sou</h5>
        <h1>Daniel Dalcastagne</h1>
        <TextLight>Desenvolvedor Fullstack</TextLight>
        <S.CTA>
          <Button href={cvDanielDalcastagne} download>
            Dowload CV
          </Button>
          <Button href="/#contact" primary>
            Vamos Conversar!
          </Button>
        </S.CTA>
        <S.Socials>
          <a
            href="https://www.linkedin.com/in/daniel-dalcastagne-4baa00179/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/dalcastagned" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href="mailto:contato@danieldalcastagne.com" target="_blank" rel="noreferrer">
            <GrMail />
          </a>
        </S.Socials>
        <S.Me>
          <img src="/img/daniel_vermelho.png" alt="Daniel Dalcastagne" />
        </S.Me>
      </S.HeaderContainer>
    </S.Header>
  );
}

export default Header;
