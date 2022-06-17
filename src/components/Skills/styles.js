import styled, { css } from 'styled-components';
import { Container } from '../../styles/globalStyles';

export const Section = styled.section`
  padding-top: 3rem;
`;

export const ContainerSkills = styled(Container)`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Skills = styled.div`
  ${({ theme }) => css`
    background: ${theme.colorBackgroundVariant};
    padding: 3.8rem 8rem;
    border-radius: 3.2rem;
    border: 0.1rem solid transparent;
    width: 45rem;

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    &:hover {
      background: transparent;
      border-color: ${theme.colorPrimaryVariant};
      cursor: default;
    }

    h3 {
      text-align: center;
      font-size: 2.4rem;
      margin-bottom: 3.6rem;
      color: ${theme.colorPrimary};
    }
  `}
`;

export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3.2rem;
  column-gap: 3.2rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  article {
    display: flex;
    gap: 1.6rem;
    align-items: center;
  }
`;
