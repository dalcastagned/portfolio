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

      @media screen and (max-width: 500px) {
        width: 100%;
      }

      &:hover {
        border-color: ${theme.colorPrimaryVariant};
        background: transparent;
      }
    }

    img {
      height: 16rem;
      border-radius: 2.4rem;
      overflow: hidden;
    }

    h3 {
      margin: 1.9rem 0 3.2rem;
    }
  `}
`;

export const CTA = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
`;
