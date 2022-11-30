import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import * as S from './styles';

function Skills() {
  const [settings, setSettings] = useState();
  const getSettings = async () => {
    const response = await axios.get('/skills.json', {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    setSettings(response.data);
  };

  useEffect(() => {
    getSettings();
  }, []);

  if (!settings) return null;
  return (
    <S.Section id="skills">
      <h5>Quais Habilidades eu Tenho</h5>
      <h2>Meu Conhecimento</h2>

      <S.ContainerSkills>
        <S.Skills>
          <h3>Desenvolvimento Frontend</h3>
          <S.SkillsContent>
            {settings.frotendSkills.map(skill => (
              <article key={skill}>
                <BsPatchCheckFill />
                <h4>{skill}</h4>
              </article>
            ))}
          </S.SkillsContent>
        </S.Skills>
        <S.Skills>
          <h3>Desenvolvimento Backend</h3>
          <S.SkillsContent>
            {settings.backendSkills.map(skill => (
              <article key={skill}>
                <BsPatchCheckFill />
                <h4>{skill}</h4>
              </article>
            ))}
          </S.SkillsContent>
        </S.Skills>
        <S.Skills>
          <h3>Outros</h3>
          <S.SkillsContent>
            {settings.othersSkills.map(skill => (
              <article key={skill}>
                <BsPatchCheckFill />
                <h4>{skill}</h4>
              </article>
            ))}
          </S.SkillsContent>
        </S.Skills>
      </S.ContainerSkills>
    </S.Section>
  );
}

export default Skills;
