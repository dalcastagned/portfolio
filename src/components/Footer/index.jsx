import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

import * as S from './styles';

function Footer() {
  return (
    <S.Footer>
      <ul>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre Mim</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#portfolio">Portfólio</a>
        </li>
        <li>
          <a href="#contact">Contatos</a>
        </li>
      </ul>

      <S.Social>
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
      </S.Social>

      <S.Copyright>
        <small>&copy; Daniel Dalcastagne. Todos os direitos reservados.</small>
      </S.Copyright>
    </S.Footer>
  );
}

export default Footer;
