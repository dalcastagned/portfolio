import { Data } from '../../data';
import { Button } from '../../styles/globalStyles';
import * as S from './styles';

function Portfolio() {
  return (
    <S.Section id="portfolio">
      <h5>Projetos que Realizei</h5>
      <h2>Portfólio</h2>

      <S.ContainerPortfolio>
        {Data.map(item => (
          <article key={item.id}>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <S.CTA>
              <Button href={item.github} target="_blank">
                Código Fonte
              </Button>
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
