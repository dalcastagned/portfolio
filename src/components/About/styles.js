import styled, { css } from 'styled-components';
import { Container } from '../../styles/globalStyles';

export const Section = styled.section`
  padding-top: 3rem;
`;

export const ContainerAbout = styled(Container)`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media screen and (min-width: 1600px) {
    grid-template-columns: 25% 60%;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const AboutMe = styled.div`
  ${({ theme }) => css`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 3.2rem;
    background: linear-gradient(45deg, transparent, ${theme.colorPrimary}, transparent);
    display: grid;
    place-items: center;

    @media screen and (max-width: 1200px) {
      width: 35%;
      margin: 1rem auto 6.4rem;
    }

    @media screen and (max-width: 1200px) {
      width: 60%;
    }

    img {
      background: ${theme.colorPrimary};
      border-radius: 3.2rem;
      overflow: hidden;
      transform: rotate(10deg);
      transition: ${theme.transition};
    }
  `}
`;

export const Cards = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
   
    @media screen and (max-width: 1200px) {
        justify-content: center;
    }

    article {
      background: ${theme.colorBackgroundVariant};
      border: 0.1rem solid transparent;
      border-radius: 1.6rem;
      padding: 1.8rem;
      text-align: center;
      transition: ${theme.transition};
      width: 14rem;
    }

    svg {
      color: ${theme.colorPrimaryVariant};
      font-size: 2.2rem;
      margin-bottom: 1.6rem;
    }

    h5 {
        font-size: 1.5rem;
    }

    small {
        font-size: 1.1rem;
        color ${theme.colorLight};
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin: 3.2rem 0 4.2rem;
    color: ${theme.colorLight};
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    white-space: pre-line;
  `}
`;
