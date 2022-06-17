import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colorPrimary};
    padding: 4.8rem 1rem;
    text-align: center;
    font-size: 1.6rem;
    margin-top: 11.2rem;

    a {
      color: ${theme.colorBackground};

        &:hover {   
            color: ${theme.colorWhite};
        }
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3.2rem;
        margin 0 auto 4.8rem;
    }
  `}
`;

export const Social = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 1.6rem;
    margin-bottom: 6.4rem;
    font-size: 2.4rem;

    a {
      background: ${theme.colorBackground};
      color: ${theme.colorWhite};
      padding: 1.3rem;
      border-radius: 1.1rem;
      display: flex;
      border: 0.1rem solid transparent;

      &:hover {
        background: transparent;
        color: ${theme.colorBackground};
        border-color: ${theme.colorBackground};
      }
    }
  `}
`;

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colorBackground};
    margin-bottom: 6.4rem;
    padding: 0 1rem;
  `}
`;
