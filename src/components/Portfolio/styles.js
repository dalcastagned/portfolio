import styled, { css } from 'styled-components';
import { Container } from '../../styles/globalStyles';

export const Section = styled.section`
  padding-top: 3rem;
`;

export const ContainerPortfolio = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    width: 85%;
    padding: 0 2rem;
    justify-content: center;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }

    article {
      background: ${theme.colorBackgroundVariant};
      padding: 2rem;
      border-radius: 3.2rem;
      border: 0.1rem solid transparent;
      transition: ${theme.transition};
      width: 40rem;
      display: grid;
      grid-template-rows: 16rem 6rem 9rem 1fr auto;

      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }

    img {
      height: 16rem;
      border-radius: 2.4rem;
      overflow: hidden;
    }

    h3 {
      margin: 1.9rem 0 1rem;
    }

    ul {
      padding: 2rem;
      margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 2rem);;
      gap: 1rem;

      li {
        padding-right: 2rem;
        list-style: circle;
        line-height: 2rem;
    }
  `}
`;

export const CTA = styled.div`
  display: flex;
  gap: 1.6rem;
  margin: 1.6rem 0;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colorWhite};
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 1.6rem;
    text-align: center;
  `}
`;
