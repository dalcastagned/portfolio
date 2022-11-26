import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiFillFolder } from 'react-icons/ai';
import { FaBookOpen } from 'react-icons/fa';
import { RiMedalFill } from 'react-icons/ri';
import { Button } from '../../styles/globalStyles';

import * as S from './styles';

function About() {
  const [settings, setSettings] = useState();
  const getSettings = async () => {
    const response = await axios.get('/about.json');
    setSettings(response.data);
  };

  useEffect(() => {
    getSettings();
  }, []);

  if (!settings) return null;

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
              <small>{settings.experience}</small>
            </article>
            <article>
              <FaBookOpen />
              <h5>Estudo</h5>
              <small>{settings.studies}</small>
            </article>
            <article>
              <AiFillFolder />
              <h5>Projetos</h5>
              <small>{settings.projects}</small>
            </article>
          </S.Cards>
          <S.Text>
            <span>
              {settings.about1}
              <br />
            </span>
            <span>
              {settings.about2}
              <br />
            </span>
            <span>{settings.about3}</span>
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
