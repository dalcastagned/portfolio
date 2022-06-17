import { BsPatchCheckFill } from 'react-icons/bs';
import * as S from './styles';

function Skills() {
  return (
    <S.Section id="skills">
      <h5>Quais Habilidades eu Tenho</h5>
      <h2>Meu Conhecimento</h2>

      <S.ContainerSkills>
        <S.Skills>
          <h3>Desenvolvimento Frontend</h3>
          <S.SkillsContent>
            <article>
              <BsPatchCheckFill />
              <h4>HTML5</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>CSS</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Javascript</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Typescript</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>React</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>MUI</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Jest</h4>
            </article>
          </S.SkillsContent>
        </S.Skills>
        <S.Skills>
          <h3>Desenvolvimento Backend</h3>
          <S.SkillsContent>
            <article>
              <BsPatchCheckFill />
              <h4>C#</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>.NET</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Node</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Express JS</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Java</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Spring Boot</h4>
            </article>
          </S.SkillsContent>
        </S.Skills>
        <S.Skills>
          <h3>Outros</h3>
          <S.SkillsContent>
            <article>
              <BsPatchCheckFill />
              <h4>GraphQL</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Firebase</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>PostgreSQL</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>SQL Server</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>MySQL</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Firebase</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Git</h4>
            </article>
          </S.SkillsContent>
        </S.Skills>
      </S.ContainerSkills>
    </S.Section>
  );
}

export default Skills;
