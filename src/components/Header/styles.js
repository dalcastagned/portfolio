import styled, { css } from 'styled-components';
import { Container } from '../../styles/globalStyles';

export const Header = styled.header`
  height: 100vh;
  padding-top: 11.2rem;
  overflow: hidden;

  h5 {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 920px) {
    height: 80vh;
  }

  @media screen and (max-width: 600px) {
    height: 100vh;
    padding-top: 5rem;
    h1 {
      font-size: 3rem;
    }

    h5 {
      font-size: 2rem;
    }
  }
`;

export const HeaderContainer = styled(Container)`
  text-align: center;
  height: 100%;
  position: relative;
`;

export const CTA = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

export const Socials = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.3rem;
    position: absolute;
    left: 0;
    bottom: 12.8rem;
    font-size: 2.4rem;

    &::after {
      content: '';
      width: 0.1rem;
      height: 3.2rem;
      background: ${theme.colorPrimary};
    }

    @media screen and (max-width: 600px) {
      display: none;
    }
  `}
`;

export const Me = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(${theme.colorPrimary}, transparent);
    width: 35.2rem;
    height: 40rem;
    position: absolute;
    left: calc(50% - 17.6rem);
    margin-top: 8.4rem;
    border-radius: 19.2rem 19.2rem 0 0;
    overflow: hidden;
    padding: 8rem 2.4rem 2.4rem 2.4rem;

    @media screen and (max-width: 600px) {
      margin-top: 6rem;
    }
  `}
`;
