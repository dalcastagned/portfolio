import { AiFillFolder } from 'react-icons/ai';
import { FaBookOpen } from 'react-icons/fa';
import { RiMedalFill } from 'react-icons/ri';
import { Button } from '../../styles/globalStyles';

import * as S from './styles';

function About() {
  return (
    <S.Section id="about">
      <h5>Vamos nos Conhecer</h5>
      <h2>Sobre Mim</h2>

      <S.ContainerAbout>
        <S.AboutMe>
          <div>
            <img src="/img/daniel_branco.png" alt="Daniel Dalcastagne" />
          </div>
        </S.AboutMe>

        <div>
          <S.Cards>
            <article>
              <RiMedalFill />
              <h5>Experiência</h5>
              <small>Mais de 1 Ano</small>
            </article>
            <article>
              <FaBookOpen />
              <h5>Estudo</h5>
              <small>Mais de 2 Anos</small>
            </article>
            <article>
              <AiFillFolder />
              <h5>Projetos</h5>
              <small>10+ Concluídos</small>
            </article>
          </S.Cards>
          <S.Text>
            <span>
              Olá, me chamo Daniel, tenho 25 anos, sou um Engenheiro Eletricista com uma grande
              paixão por tecnologia que decidiu sair da zona de conforto e entrar para o mundo do
              desenvolvimento web.
              <br />
            </span>
            <span>
              Estudo muito todos os dias para me aprimorar e atingir meus objetivos pois acredito
              que tudo é possível com dedicação e resiliência.
              <br />
            </span>
            <span>Será um prazer fazer parte da sua equipe.</span>
          </S.Text>
          <Button href="/#contact" primary>
            Vamos Conversar!
          </Button>
        </div>
      </S.ContainerAbout>
    </S.Section>
  );
}

export default About;
