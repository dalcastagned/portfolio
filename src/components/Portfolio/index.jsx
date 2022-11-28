import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../../styles/globalStyles';
import * as S from './styles';

function Portfolio() {
  const [settings, setSettings] = useState();
  const getSettings = async () => {
    const response = await axios.get('/portfolio.json');
    setSettings(response.data);
  };

  useEffect(() => {
    getSettings();
  }, []);

  if (!settings) return null;

  return (
    <S.Section id="portfolio">
      <h5>Projetos que Realizei</h5>
      <h2>Portfólio</h2>

      <S.Title>{settings.studies.title}:</S.Title>
      <S.ContainerPortfolio>
        {settings.studies.projects.map(item => (
          <article key={item.id}>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul>
              {item.technologies.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <S.CTA>
              {item.github && (
                <Button href={item.github} target="_blank">
                  Código Fonte
                </Button>
              )}
              {item.demo && (
                <Button href={item.demo} primary target="_blank">
                  Live Demo
                </Button>
              )}
            </S.CTA>
          </article>
        ))}
      </S.ContainerPortfolio>

      <S.Title style={{ marginTop: '5rem' }}>{settings.freelancers.title}:</S.Title>
      <S.ContainerPortfolio>
        {settings.freelancers.projects.map(item => (
          <article key={item.id}>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul>
              {item.technologies.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <S.CTA>
              {item.github && (
                <Button href={item.github} target="_blank">
                  Código Fonte
                </Button>
              )}
              {item.demo && (
                <Button href={item.demo} primary target="_blank">
                  Live Demo
                </Button>
              )}
            </S.CTA>
          </article>
        ))}
      </S.ContainerPortfolio>
    </S.Section>
  );
}

export default Portfolio;
