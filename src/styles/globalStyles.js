import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    ${({ theme }) => css`
        * {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            list-style: none;
            text-decoration: none;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: 'Poppins', sans-serif;

            &::before,
            &::after {
                box-sizing: inherit;
            }
        }

        h1 {
            font-size: 4rem;
            font-weight: 100;
        }

        h1, h2, h3, h4, h5 {
            font-weight: 500;
        }
        
        h2 {
          font-size: 3.8rem;
        }

        h5 {
          font-size: 2.2rem;
        }

        section {
            margin-top: 2rem;

            @media screen and (max-width: 1024px) {
                margin-top: 9.6rem;
            }
        }

        section > h2, 
        section > h5 {
                text-align: center;
                color ${theme.colorLight};
            }

        section > h2 {
            color ${theme.colorPrimary};
            margin-bottom: 4.8rem;
      
            @media screen and (max-width: 600px) {
                margin-bottom: 3.2rem;
            }
        }

        body {
            font-size: 1.6rem;
            background: ${theme.colorBackground};
            color: ${theme.colorWhite};
            line-height: 1.7;
            background-image: url(/img/bg-texture.png);
        }

        html {
            scroll-behavior: smooth;
            font-size: 62.5%;
        }

        ::-webkit-scrollbar {
            display: none;
        }

        a {
            color: ${theme.colorPrimary};
            transition: ${theme.transition};

            &:hover {
                color: ${theme.colorWhite};
            }
        }

        img {
            display: block;
            width: 100%;
            object-fit: cover;
        }
    `}
`;
export default GlobalStyle;

export const Container = styled.div`
  ${({ theme }) => css`
    width: ${theme.containerWidthLg};
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
      width: ${theme.containerWidthMd};
    }

    @media screen and (max-width: 600px) {
      width: ${theme.containerWidthSm};
    }
  `}
`;

export const TextLight = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colorLight};
  `}
`;

export const Button = styled.a`
  ${({ theme, primary }) => css`
    width: max-content;
    display: inline-block;
    color: ${primary ? theme.colorBackground : theme.colorPrimary};
    padding: 1.2rem 1.9rem;
    border-radius: 0.65rem;
    cursor: pointer;
    border: 0.1rem solid ${theme.colorPrimary};
    transition: ${theme.transition};
    background: ${primary ? theme.colorPrimary : theme.colorBackground};
    font-size: 1.6rem;

    &:hover {
      background: ${theme.colorWhite};
      color: ${theme.colorBackground};
      border-color: transparent;
    }
  `}
`;
